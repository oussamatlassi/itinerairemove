var React = require('react');

var Header = React.createClass({
    render: function(){
        return (
            <header>
                <h1> <i className='icon-location-on'> </i>Google Map Route Planner </h1>
                <p className='author'> Développé par <a title='Oussama Atlassi - Javascript developer' href='https://www.linkedin.com/in/oussamaatlassi'> 'O.A' </a></p>
            </header>
            );
    }
});

module.exports = Header;