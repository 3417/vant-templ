module.exports = ({ file }) => {
    let isVant = file && file.dirname && file.dirname.indexOf("vant") > -1;
    let rootValue = isVant ? 37.5 : 37.5; // 判断条件 根据设计图自行调整
    return {
        plugins: {
            autoprefixer: {},
            "postcss-pxtorem": {
                rootValue: rootValue,
                propList: ["*"] 
            }
        }
    }
}