class ChartGenerator {
    constructor() {
        this.data = null;
        this.styling = null;
    }

    async loadFiles() {
        try {
            // Load data and styling from external files
            const [dataResponse, stylingResponse] = await Promise.all([
                fetch('chart_data.json'),
                fetch('styling_config.json')
            ]);
            
            this.data = await dataResponse.json();
            this.styling = await stylingResponse.json();
            
            console.log('Loaded data:', this.data);
            console.log('Loaded styling:', this.styling);
            
            return true;
        } catch (error) {
            console.error('Failed to load files:', error);
            return false;
        }
    }

    generateMermaidCode() {
        if (!this.data || !this.styling) {
            throw new Error('Data or styling not loaded');
        }

        // Build Mermaid color configuration
        let colorConfig = '';
        if (this.styling.mermaidColors) {
            const colors = Object.entries(this.styling.mermaidColors)
                .map(([key, value]) => `'${key}': '${value}'`)
                .join(', ');
            colorConfig = `%%{init: {'pie': {'textPosition': 0.5}, 'themeVariables': { ${colors} }}}%%\n`;
        }

        // Build the diagram code
        let mermaidCode = `${colorConfig}${this.data.type} title ${this.data.title}`;
        
        // Add data points
        this.data.values.forEach(item => {
            mermaidCode += `\n         "${item.label}" : ${item.value}`;
        });

        return mermaidCode;
    }

    async renderChart() {
        // Load external files first
        const loaded = await this.loadFiles();
        if (!loaded) return false;

        try {
            // Generate Mermaid code
            const mermaidCode = this.generateMermaidCode();
            console.log('Generated Mermaid code:', mermaidCode);

            // Insert into DOM
            document.getElementById('chart-container').innerHTML = 
                `<div class="mermaid">${mermaidCode}</div>`;

            // Initialize and render Mermaid
            mermaid.initialize({ 
                startOnLoad: false,
                theme: this.styling.mermaidTheme || 'neutral'
            });
            
            await mermaid.run();
            console.log('Mermaid rendered');

            // Convert to sketchy style
            await this.applySketchyStyle();
            
            return true;
        } catch (error) {
            console.error('Failed to render chart:', error);
            return false;
        }
    }

    async applySketchyStyle() {
        // Wait for DOM to settle
        await new Promise(resolve => setTimeout(resolve, 500));

        const svgElement = document.querySelector('#chart-container svg');
        if (!svgElement) {
            throw new Error('No SVG element found');
        }

        // Create svg2roughjs instance with styling from config
        const roughConverter = new svg2roughjs.Svg2Roughjs('#rough-container');
        roughConverter.svg = svgElement;
        
        // Apply all styling options
        roughConverter.roughConfig = this.styling.roughConfig;
        roughConverter.fontFamily = this.styling.fontFamily;
        roughConverter.backgroundColor = this.styling.backgroundColor;
        roughConverter.randomize = this.styling.randomize;
        roughConverter.seed = this.styling.seed;
        roughConverter.pencilFilter = this.styling.pencilFilter;

        // Convert to sketchy
        await roughConverter.sketch();
        console.log('Rough conversion complete');
    }
}

// Auto-run when page loads
document.addEventListener('DOMContentLoaded', async () => {
    const generator = new ChartGenerator();
    const success = await generator.renderChart();
    
    if (success) {
        console.log('Chart generation complete!');
    } else {
        console.error('Chart generation failed!');
    }
});