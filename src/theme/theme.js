// import RobotoItalic from '../assets/fonts/Roboto/Roboto-Black.ttf';
// import School from '../assets/img/school.jpg';

const colors = {
    main: "#5d4f8d",
    base: "#f0f1f3",
    white: "white",
    black: "black",
    gray: "#5f6769",
    //button colors
    btnPurple: '#6200ed',
    btnPurpleWhenHover: "#5600d1",
    //input color
    inputPurple: '#6200ed',
    inputPurpleWhenFocus: "#5600d1"

}

const size = {
    fontDefault: 14,
    bold: "bold",
    italic: "italic",
    regular: 550,

    //basic button styling
    btnFontWeight: 599,
    btnFont: "0.82em",
    btnFontSpacing: "0.12em",
    btnPadding: "0.6em 1.1em",
    btnRadius: "0.32em",
    btnRadiusWhenHover: "0.40em",
    btnBoxShadow: "3px 10px 60px rgba(0, 0, 0, 0.20)",
    btnBoxShadow1: "0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)",
    btnBoxShadowWhenHover: "3px 20px 20px 20px rgba(0, 0, 0, 0.02)",
    btnBoxShadow1WhenHover: "0px 3px 4px rgba(0, 0, 0, 0.24), 0px 2px 4px rgba(0, 0, 0, 0.12)",
    btnOutline: "none",
    btnTransform: 'translateY(2px)',
    //large button
    btnFontLarge: "1em",
    btnFontSpacingLarge: "0.13em",
    btnPaddingLarge: "0.8em 1.4em",
    btnRadiusLarge: "0.40em",

    //input field styling
    inputPadding: "0.6em",
    inputPaddingWhenFocus: "0.7em",
    inputWidth: "9em",
    inputWidthWhenFocus: "10em",
    inputBorder: "2px solid #979797",
    inputBoxShadow: "3px 10px 20px rgba(0, 0, 0, 0.05)",
    inputBoxShadowWhenHover: "5px 15px 40px rgba(0, 0, 0, 0.10)",
    inputBoxShadowWhenHover1: "5px 15px 40px rgba(0, 0, 0, 0.04)",
    inputBoxShadowWhenFocus: "10px 20px 80px rgba(0, 0, 0, 0.20)",
    inputOutline: "none",

    //dropdown or select styles
    selectBorder: "2px solid #6200ed",

    //sidebar styles
    sideBarBoxShadow: "4px 2px 4px rgba(0, 0, 0, 0.10)"
}

const font = {
    fontFamily: "'Roboto', sans-serif",
}

const text = {
    altText: "sorry no image"
}

const icon = {
    beforeColor: colors.btnPurple,
    hoverColor: colors.white
}

const imgSrc = {
    loginBackground: require('../assets/img/school.jpg')
}



export default { colors, size, font, text, icon, imgSrc };


