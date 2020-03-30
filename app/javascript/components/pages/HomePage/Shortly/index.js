import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ShortlyPreview from '../ShortlyPreview';

import backgroundSvg from '../../../../../assets/images/icons/bg-shorten-desktop.svg';
import './style.css'

export default function Shortly() {

    const [link, setLink] = useState('');
    const [msgError, setMsgError] = useState('');
    const [history, setHistory] = useState([]);
    const [reload, setReolad] = useState([]);
    const [countLink, setCountLink] = useState(0);


    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem('history')));
        if(history){
            setCountLink(history.length);
        }
            
    }, [reload])


    useEffect(() => {
        if(history){
            setCountLink(history.length);
        }
    }, [history, reload])

    async function handleShort(e) {
        e.preventDefault();

        if (link === null || link === '' || !link) {
            setMsgError('Prease add a link')

            return false;
        } else {
            setMsgError('')
        }


        try {
            const response = await axios.post('https://rel.ink/api/links/', { "url": link })

            // Cria o objeto
            const data = {
                id: response.data.hashid,
                url: response.data.url,
                short: `https://rel.ink/${response.data.hashid}`,
                status: "copy"
            }


            // Verifica se o Storage está vazio
            if (history === null || history === 'undefined' || !history) {

                let historyStorage = [];

                historyStorage.push(data);
                localStorage.setItem('history', JSON.stringify(historyStorage));
                setReolad(historyStorage)
                return false;
            }


            // Verifica se o link a ser encurtado já existe
            const filterHistory = await history.filter(item => {
                return item.id === response.data.hashid
            })

            if (filterHistory.length !== 0) {
                setMsgError('Esse link já foi encurtado')
                return false;
            }

            // Verifica o tamanho do history max=3
            if (history.length < 3) {

                let historyStorage = history;
                historyStorage.push(data);
                localStorage.setItem('history', JSON.stringify(historyStorage));
                setReolad(historyStorage)
                return false;
            }

            // Verifica o tamanho do history max=3
            if (history.length === 3) {

                let historyStorage = history;
                historyStorage[2] = data;
                localStorage.setItem('history', JSON.stringify(historyStorage));
                setReolad(historyStorage)
                return false;
            }



        } catch (error) {
            setMsgError('Invalid link')
            console.log({ error })
        }


    }

    // console.log("history", history.length)
    return (
        <>
            <div id="count-space"
                style={countLink !== 0 ? {height: `calc(156px * ${countLink})` } :  {height: '256px'}}
                className={countLink === 0 ? 'space' : null}
            ></div>
            <section className="shortly-product">

                {/* Input */}
                <section className="shortly-action" style={{ backgroundImage: `url(${backgroundSvg})` }}>
                    <form className="action-form">
                        <div className="filds">
                            <input type="text" className="search" placeholder="Shorten a link here..." onChange={event => setLink(event.target.value)} />
                            <button type="submit" className="btn btn-ative btn-search" onClick={handleShort}>Shorten It!</button>
                            <p className="error">{msgError}</p>
                        </div>
                    </form>
                </section>



                {/* List */}
                {reload ? (
                    <section className="Shortly-list">
                        {/* {history ? <ShortlyPreview history={history} /> : null} */}
                    </section>
                ): null}
                

            </section>
        </>
    )
}