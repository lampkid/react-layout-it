import ReactDOM from 'react-dom';
import React from 'react';

import 'antd/dist/antd.less';
import Layout from '../src';

import "./index.less";

ReactDOM.render(
    <div>
        layout it by rows:
        <Layout cols={3} className="layout"> 
           <div className="item" > 1 </div>
           <div className="item" > 2 </div>
           <div className="item" style={{height: 100}}> 3 </div>
           <div className="item"> 4 </div>
           <div className="item"> 5 </div>
           <div className="item"> 6 </div>
           <div className="item"> 7 </div>
           <div className="item"> 8 </div>
           <div className="item"> 9 </div>
           <div className="item"> 10 </div>
        </Layout>

        layout it by cols:
        <Layout cols={3} mode="col" className="layout"> 
           <div className="item"> 1 </div>
           <div className="item"> 2 </div>
           <div className="item" style={{height: 100}}> 3 </div>
           <div className="item"> 4 </div>
           <div className="item"> 5 </div>
           <div className="item"> 6 </div>
           <div className="item"> 7 </div>
           <div className="item"> 8 </div>
           <div className="item"> 9 </div>
           <div className="item"> 10 </div>
        </Layout>
        layout it with different width::
        <Layout cols={[4, 2,18]} mode="row" className="layout"> 
           <div className="item"> 1 </div>
           <div className="item"> 2 </div>
           <div className="item" style={{height: 100}}> 3 </div>
           <div className="item"> 4 </div>
           <div className="item"> 5 </div>
           <div className="item"> 6 </div>
           <div className="item"> 7 </div>
           <div className="item"> 8 </div>
           <div className="item"> 9 </div>
           <div className="item"> 10 </div>
        </Layout>
    </div>
, document.getElementById('main'));
