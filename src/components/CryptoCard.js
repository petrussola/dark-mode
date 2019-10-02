import React from 'react';

export default function CryptoCard(props) {
    const selectedCrypto = props.coinData.find( item => {
        return (item.id === props.match.params.coin)
    })
    debugger
    return (
        <div>in the crypto card
            <p>{selectedCrypto.name}, and the current price is {selectedCrypto.current_price}</p>

        </div>
    )
}