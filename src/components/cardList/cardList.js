import Card from "../card/card";
// const data = require('./cardListData.json')

// console.log("DATA -> ",data);
const CardList = (props) => {
    return ( <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>);
    /* return (<div>
        <Card {...data.testData[0]}/>
        <Card {...data.testData[1]}/>
    </div>); */
}   
export default CardList;