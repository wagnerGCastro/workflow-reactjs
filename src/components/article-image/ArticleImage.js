import React, { Component } from 'react';


// import logoReact from '../../../assets/img/logo-react.png'  // error



class ArticleImage extends Component {
  constructor() {
    super()
  }

    render() {
        return(
            <article>
                <h2>Article white Image</h2>
                <hr/>
                <div className="">
                    <img style={{width: '300px'}} src="/assets/img/logo-react.png" />
                    <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum 2</p>
                </div>

                <div className="">
                    // <img style={{width: '300px'}} src="{logoReact}" />
                    <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum 2</p>
                </div>
            </article>
        )
    }
}

export default ArticleImage
