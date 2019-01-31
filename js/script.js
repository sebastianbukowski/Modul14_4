var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'Harry, Ron i Hermiona wyruszają odnaleźć horkruksy, dzięki którym Voldemort zapewnił sobie nieśmiertelność.            Muszą je wszystkie zniszczyć, by go pokonać. ',
      image: './images/harry_potter.jpg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Targany niesłusznymi wyrzutami sumienia po śmierci ojca mały lew Simba skazuje się na wygnanie, rezygnując z           przynależnego mu miejsca na czele stada.',
      image: './images/krol_lew.jpg'
    },
    {
     id: 3,
     title: 'Mumia',
     desc: 'Komandos marynarki wojennej, Nick Morton, wyrusza z zespołem do Iraku, by odnaleźć ukrywającą się w bunkrze             grupę terrorystów. Na miejscu odkrywa starożytny grobowiec, gdzie czyha ukryte  niebezpieczeństwo.',
     image: './images/mumia.jpg'
      },
      {
     id: 4,
     title: 'Avatar',
     desc: 'Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną                 społecznością i postanawia jej pomóc. ',
     image: './images/avatar.jpg'
      },
      {
     id: 5,
     title: 'Książę Persji: Piaski czasu',
     desc: 'Dastan, przybrany syn króla Persji, zostaje wrobiony w morderstwo swojego ojca. Wraz z niepokorną księżniczką           Taminą wyrusza w podróż, aby dowieść swojej niewinności.',
     image: './images/ksiaze_persji.jpg'
      }
  ];

  
var MovieTitle = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired,
    },
  
    render: function() {
        return (
          React.createElement('h2', {}, this.props.title)
        );
    },
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('img', {src: this.props.image},)
        );
    },
})

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        );
    }
})
var DescriptionWrapper = React.createClass({
    proprTypes: {
       movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {className: 'picture_wrapper'},
                React.createElement(MovieImage, {image: this.props.movie.image},),
                React.createElement(MovieDescription, {desc: this.props.movie.desc},)
            )
        );
    },
})

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function () {
        return ( React.createElement('li', {}, 
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(DescriptionWrapper, {movie: this.props.movie})
            )
        );
    }
})

var movieElements = movies.map(function(movie) {
    return (
        React.createElement(Movie, {key: movie.id, movie: movie})
    );
});

var moviesList = React.createElement('ul', {}, movieElements );


var app = React.createElement('div', {}, 
    React.createElement('h1', {},  'Lista filmów' ),
    (moviesList),
)

ReactDOM.render(app, document.getElementById('app'));