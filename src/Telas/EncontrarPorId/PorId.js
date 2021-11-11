import React, { useState, useEffect } from 'react';
import Menu from "../../components/Menu/Menu"
import axios from 'axios'
import './PorId.css'

export default function PorId(){
        return (
            <div>
                <Menu />
                    <form onSubmit={this.onSubmit}>
                    <span>Digite o ID para procurar</span>
                    <input type="number" name="numero"></input>
                    <button className="btn-procurar" type="submit"> Procurar</button>
                    </form>
                    <div>
                        <span>O nome que vc procurou é :</span>
                    </div>
            </div>
        );
    }
