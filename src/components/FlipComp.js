import React, {Component} from 'react';
import FlipMove from 'react-flip-move';

class Article extends Component {
  render() {
    const listClass = `list-item card ${this.props.view}`;
//    const style = { zIndex: 100 - this.props.index };

    return (
      <li id={this.props.id} className={listClass}>
        <h3>{this.props.name}</h3>
      </li>
    );
  }
};

export default class TopArticles extends Component {
  
  renderTopArticles() {    
    return this.props.articles.map( article => <Article {...article} key={article.id} /> );
  }

  render() {
    return (
      <div className="top-articles">
        <FlipMove easing="linear" duration="1000">
          { this.renderTopArticles() }
        </FlipMove>
      </div>
    );
  }
}