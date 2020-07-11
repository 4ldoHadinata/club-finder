import React from 'react';

// Searchbox dimana kita menginput keyword pencarian melalui form

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    onChangeKeyword = (e) => {
        this.setState({ keyword: e.target.value })
    }

    render() {
        const { keyword } = this.state;
        return (
            <form onSubmit={this._handleSubmit} className="mb-4">
                <input type="text" value={keyword} onChange={this.onChangeKeyword} placeholder="Input club name.." className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-9/12 appearance-none leading-normal inline" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/12 inline" >Search</button>
            </form>
          );
    }
}

export default SearchBox;