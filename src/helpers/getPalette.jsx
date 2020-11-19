const getPalette = (isDark) => {
  let palette = {
    LimeGreen: "hsl(163, 72%, 41%)",
    BrightRed: "hsl(356, 69%, 56%)",
    facebook: "hsl(208, 92%, 53%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: "linear-gradient(to left,hsl(37, 97%, 70%),hsl(329, 70%, 58%))",
    youtube: "hsl(348, 97%, 39%)",
    BG: `${isDark ?"hsl(230, 17%, 14%)":'hsl(0, 0%, 100%)'}`,
    TopBGPattern: `${isDark?"hsl(232, 19%, 15%)":'hsl(225, 100%, 98%)'}`,
    CardBG: `${isDark?"hsl(228, 28%, 20%)":"hsl(227, 47%, 96%)"}`,
    Text: `${isDark?"hsl(228, 34%, 66%)":"hsl(228, 12%, 44%)"}`,
    Text2: `${isDark?"hsl(0, 0%, 100%)":"hsl(230, 17%, 14%)"}`,
  }
  return palette
};

export default getPalette;
