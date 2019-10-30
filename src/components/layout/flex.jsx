import React, { Component } from 'react';
import './flex.css';

 export default class flex extends Component {
     render() {
         return (
            <div class="flexcontainer">
            <div class="flexrow">
              <div class="green flexcol" style="flex-basis:35em">A</div>
            </div>
             <div class="flexrow">
                 <div class="red flexcol" style="flex-basis: 20em">1</div>
                 <div class="red flexcol" style="flex-basis: 14.2em">2</div>
            </div>
          </div>
         )
     }
 }