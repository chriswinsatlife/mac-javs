---
config:
  xyChart:
    titlePadding: 36
    titleFontSize: 20
    plotReservedSpacePercent: 15
    chartOrientation: "vertical"
    showDataLabel: false
    width: 700
    height: 500
    xAxis:
      showLabel: true
      labelFontSize: 16
      labelPadding: 1
      showTitle: true
      titleFontSize: 16
      titlePadding: 20
      showTick: true
      tickLength: 4
      tickWidth: 2
      showAxisLine: true
      axisLineWidth: 1
    yAxis:
      showLabel: true
      labelFontSize: 12
      labelPadding: 2
      showTitle: true
      titleFontSize: 16
      titlePadding: 48
      showTick: true
      tickLength: 8
      tickWidth: 2
      showAxisLine: true
      axisLineWidth: 1
  themeVariables:
    xyChart:
      backgroundColor: "white"
      titleColor: "#000000"
      xAxisLabelColor: "#000000"
      xAxisTitleColor: "#000000"
      xAxisTickColor: "#000000"
      xAxisLineColor: "#000000"
      yAxisLabelColor: "#000000"
      yAxisTitleColor: "#000000"
      yAxisTickColor: "#000000"
      yAxisLineColor: "#000000"
      plotColorPalette: "blue"
---
xychart-beta
    title "Does America Seriously Overpay For Drugs? - U.S. vs OECD Comparison"
    x-axis ["Brand Name", "Generic", "OECD Average", "Comparable Countries"]
    y-axis "U.S. Price Level vs. OECD (%)" 0 --> 500
    bar [422, 67, 99, 79]