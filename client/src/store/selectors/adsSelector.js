// GET VISIABLE EXPENSIVE
// const adsSelector = (ads, { text, category }) => {

//     return ads.ads.filter(ad => {
//         console.log('filter ad', ad)
//         const searchByCategory = ad.category == category;
//         const textMatch = ad.title.toLowerCase().includes(text.toLowerCase());
//         return searchByCategory & textMatch;
//     })
// }


const adsSelector = (ads, { text, category }) => {

    return ads.ads.filter(ad => {
        console.log('filter ad', ad)
        const searchByCategory = ad.category == category;
        // const textMatch = ad.mobileName.toLowerCase().includes(text.toLowerCase());
        return searchByCategory
        //  & textMatch ;
    })
}


export const adsSelectorByText = (ads, { text }) => {

    return ads.ads.filter(ad => {
        console.log('filter ad', ad)
      
        const textMatch = ad.mobileName.toLowerCase().includes(text.toLowerCase());
        return textMatch ;
    })
}
// let adsFilter = ads.filter(ad => {

//     return ad.category == this.props.filter.category;
// })

export default adsSelector;



//expense: state.expenses.find((expense) => expense.id === props.match.params.id)

// let filteredAds = ads.filter(ad =>{
        //     return ad._id === paramsId;
        // })