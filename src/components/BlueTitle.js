function BlueTitle({title}){
    return (
        <div style={{margin:"10px 10px 10px 0px",height:30}}>
            <div style={{width:6,height:30,backgroundColor:"rgb(86,144,200)",display:"inline-block"}}></div>
            <div style={{display:"inline-block",fontSize:"20px",fontWeight:"bold",position:"relative",top:-5}}> &nbsp; &nbsp;{title}</div>
            <br />
        </div>
    )
}
export default BlueTitle
