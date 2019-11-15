// import RobotoItalic from '../assets/fonts/Roboto/Roboto-Black.ttf';
// import School from '../assets/img/school.jpg';

const colors = {
    main: "#5d4f8d",
    base: "#f0f1f3",
    white: "white",
    black: "black",
    gray: "#5f6769",
    sidebar: "#2b2b2b",
    sidebarHover: "#bc231d",
    //button colors
    btnPurple: '#2b2b2b',
    btnPurpleWhenHover: "#2b2b2b",
    //input color
    inputPurple: '#6200ed',
    inputPurpleWhenFocus: "#564985",
    //cards color
    cardsbackground: "navy",
    //sidebar custom hover
    aside: "#5d4f8d",
    //toggler button
    togglerBackground: "rgb(240,250,228)",
    togglerColor: "#5c5757",
    //view profile
    viewText: "#918190",
    viewhed1: "#400f3c",
    viewhed: "#703f6d"

}

const size = {
    fontDefault: '12.8px',
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
    //toggler button
    togglerBackgroundWhenHover: colors.main,
    togglerShadow: "0.5px 0.5px 0.2px 0.4px rgba(0,0,0,0.05)",
    togglerShadowWhenHover: "1.1px 1.2px 1.1px 1.8px rgba(0,0,0,0.18)",
    togglerBorder: "0.5px solid rgba(0,0,0,0.12)",



    //input field styling
    inputPadding: "0.6em",
    inputPaddingWhenFocus: "0.65em",
    inputWidth: "13em",
    inputHeight: "2em",
    inputWidthWhenFocus: "13.5em",
    inputBorder: "2px solid #979797",
    inputBoxShadow: "3px 10px 20px rgba(0, 0, 0, 0.05)",
    inputBoxShadowWhenHover: "5px 15px 40px rgba(0, 0, 0, 0.10)",
    inputBoxShadowWhenHover1: "4px 11px 22px rgba(0, 0, 0, 0.04)",
    inputBoxShadowWhenFocus: "10px 20px 80px rgba(0, 0, 0, 0.20)",
    inputOutline: "none",

    //LoginFormContainer
    LoginBoxShadow: "4px 15px 4px 1px #fafafa",
    //cards field styling
    cardswidth: "12em",
    cardshight: "12em",
    cardsboxshadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    cardsMargin: "10px",
    cardsRadius: "1.5em",
    normalCardRadius: "0.5em",

    //dropdown or select styles
    selectBorder: "2px solid #5d4f8d",

    //sidebar styles
    sideBarBoxShadow: "4px 2px 4px rgba(0, 0, 0, 0.10)",
    //tree sidebar style
    sideBarBoxShadow1: "0.5px 1px 2px rgba(0, 0, 0, 0.30)",

    //topbar and footer
    topBarBoxShadow: '8px 15px 12px 10px rgba(240, 241, 243, 100)',
    //text engrave
    textEngraved: 'rgba(245, 245, 245, 0.5) 0.5px 0.5x 1px',

    //table style
    tableBoxShadowWhenFocus: "5px 5px 40px rgba(0, 0, 0, 0.10)",
    tableRadius: "1.5em",
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


