import React from 'react';


class Content extends React.Component{
    render(){
        return(
            <h2>{this.props.title}</h2>
        )
    }
}
Content.propTypes = {
    title: React.PropTypes.string
};
export default Content;