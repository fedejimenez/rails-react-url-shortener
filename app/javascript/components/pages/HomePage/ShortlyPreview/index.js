import React, {useState} from 'react';
// import ClipboardJS from 'clipboard';
// const clipboard = new ClipboardJS('.btn-copy');


export default function ShortlyPreview(props) {

    const [reload, setReload] = useState(props.history);
    const history = props.history;

    // clipboard.on('success', async function (e) {
    //     if (e.text) {

    //         for (let i = 0; i < history.length; i++) {
    //             if (history[i].short === e.text) {
    //                 console.log(e.text)
    //                 if (history[i].status === 'copy') {

    //                     let data = history;
    //                     data[i].status = 'copied';
    //                     localStorage.setItem('history', JSON.stringify(data));
    //                     setReload(data)
    //                     break;
    //                 }
    //             }
    //         }

    //     }
    // });

    return (

        // <>
        //     {reload ? history.map(item => (
        //         <div className="container-preview" key={item.id}>

        //             <p className="link" >{item.url}</p>
        //             <div className="content">
        //                 <p className="shortLink">{item.short}</p>
        //                 <p className="shortLink-none" id={`tre-${item.id}`}>{item.short}</p>
        //                 <button
        //                     className={item.status === 'copied' ? "btn btn-copy copy btn-disable" : "btn btn-ative btn-copy copy"}
        //                     data-clipboard-target={`#tre-${item.id}`}
        //                     disabled={item.status === 'copied' ? true : false}>
        //                     {item.status === 'copied' ? 'copied!' : 'Copy'}
        //                 </button>
        //             </div>

        //         </div>

        //     )): null}
        // </>


    )
}