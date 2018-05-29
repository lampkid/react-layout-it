import React from 'react';

import {Row, Col} from 'antd';


class Layout  extends React.Component {
    constructor(props) {
        super(props);
    }

    renderByRow() {
        const colList = this.getColList();
        const colCount = colList.length;

        const style = this.props.style || {marginBottom: 8};
        const gutter = this.props.gutter || 0;

        let childrenComp = [];
        let rowChildrenComp = [];

        const childCount = this.getChildCount();
        React.Children.map(this.props.children, (child, index) => {

            const colIndex = index % colCount;
            const spans = colList[colIndex];

            rowChildrenComp.push(<Col span={spans}>{child}</Col>);
            if (colIndex === colCount - 1 || index === childCount - 1) {
                childrenComp.push(
                    <Row style={style} gutter={gutter}>
                        {rowChildrenComp}
                    </Row>
                );

                rowChildrenComp = [];
            }
        });

        return childrenComp;
    }

    renderByCol() {
        const colList = this.getColList();
        const colCount = colList.length;

        const colStyle = this.props.colStyle || {marginBottom: 8};

        let colChildrenComp = [];
        let childrenComp = [];

        const childCount = this.getChildCount();
        React.Children.map(this.props.children, (child, index) => {

            const colIndex = index % colCount;

            if (typeof colChildrenComp[colIndex] === 'undefined') {
                colChildrenComp[colIndex] = [];
            }
            colChildrenComp[colIndex].push(<div>{child}</div>);
            
        });

        if (colChildrenComp.length > 0) {
            childrenComp = (
                <Row>
                    {
                        colChildrenComp.map( (col, colIndex) => {

                            const spans = colList[colIndex];
                            return <Col span={spans}>{col}</Col>
                        })
                    }
                </Row>
            );
        }

        return childrenComp;
    }

    getColList() {
        let cols = this.props.cols || 1, colCount, colList;
        if (Array.isArray(cols)) {
            colCount = cols.length;
            colList = cols;
        }
        else {
            colCount = +cols;
            const spanPerCol = 24 / colCount;

            colList = [];

            for (let i = 0; i < colCount; i++) {
                colList.push(spanPerCol);
            }

        }

        return colList;

    }

    getChildCount() {
        return React.Children.count(this.props.children) || 0
    }

    render() {


        
        const {mode, className, style} = this.props; 

        let childrenComp;
        if (mode === 'col') {
            childrenComp = this.renderByCol(); 
        }
        else {
            childrenComp = this.renderByRow(); 
        }


        return (
            <div className={className} style={style}>
            {childrenComp}
            </div>
        )
    }
}

export {Layout};
export default Layout;
