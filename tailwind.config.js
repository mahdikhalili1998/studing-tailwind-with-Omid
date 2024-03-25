/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        farsiNum: "IRANSansXFaNum",
      },
      backgroundImage: ({ theme }) => ({
        newgradiant: `linear-gradiant(90deg,${theme("colors.red.500")},#ff0066,#6600ff)`,
      }),
    },
  },
  plugins: [],
};
