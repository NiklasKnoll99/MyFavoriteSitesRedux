import React from 'react';
import ReactDOM from 'react-dom';

import '../newFavForm/NewFavFormStyle.css'
import '../style/Style.css';

export default class NewFavForm extends React.Component {
    render() {
        return (
            <div className="accordion">
                <div className="accordion__head">Neuen Favoriten hinzufügen</div>
                <div className="accordion__body">
                    <div className="accordion__content">
                        <input className="input newFavInput" placeholder="Name"/><br/>
                        <input className="input newFavInput" placeholder="Facebookseite"/><br/>
                        <input className="input newFavInput" placeholder="Adresse"/><br/>
                        <input className="input newFavInput" placeholder="E-Mail"/><br/>
                        <textarea className="input newFavInput" placeholder="Kommentar" autogrow="true"></textarea><br/><br/>
    
                        <div className="center"><button onClick={() => this.onSubmitClick()} className="button">Hinzufügen</button></div>
                        <br/>
                    </div>
                </div>
            </div>
        );
    };

    checkInputs(name, facebookpage, address, email) {
        let errors = [];
        let errString = null;
    
        if (name === '')
            errors.push('Name');
    
        if (facebookpage === '')
            errors.push('Facebookseite');
    
        if (address === '')
            errors.push('Adresse');
    
        if (email === '')
            errors.push('Email');
    
        if (errors.length === 1) {
            errString = 'Das Feld "' + errors[0] + '" darf nicht leer sein!';
        }
    
        else if (errors.length > 1) {
            errString = 'Die Felder "';
    
            for (let i = 0; i < errors.length; i++) {
                if (i < errors.length - 1)
                    errString += errors[i] + ', ';
    
                else if (i === errors.length - 1)
                    errString += errors[i] + '" dürfen nicht leer sein!';
            }
        }
    
        if (errString != null) {
            chayns.dialog.alert('Fehler', errString);
            return false;
        }

        else {
            return true;
        }
    };

    onSubmitClick() {
        let $inputs = document.querySelectorAll('.newFavInput');

        if (this.checkInputs($inputs[0].value, $inputs[1].value, $inputs[2].value, $inputs[3].value, $inputs[4].value)) {
            chayns.dialog.alert('', 'Du hast eine neue Site hinzugefügt!');
        }
    };
}