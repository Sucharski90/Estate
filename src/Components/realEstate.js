// import React, { Component} from 'react'
// import ReactDOM from 'react-dom'
// import Header from './Header'
// import Listings from './Listings'
// import Filter from './Filter'
// import listingsData from './data/listingsData.js'

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       name: 'Matt',
//       listingsData,
//       cities : "All",
//       homeType : "All",
//       bedrooms : "0",
//       min_price : 0,
//       max_price : 10000000,
//       min_floor_space : 0,
//       max_floor_space : 5000,
//       min_floor_space : 0,
//       max_floor_space : 5000,
//       elevator: false,
//       finished_basement: false,
//       gym: false,
//       swiming_pool: false,
//       filteredData : listingsData,
//       populateFormsData : '',
//     }
//     this.change = this.change.bind(this)
//     this.filteredData = this.filteredData.bind(this)
//     this.populateForms = this.populateForms.bind(this)
//   }
//   change (event) {
//     let name = event.target.name
//     let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

//     this.setState({
//       [name]: value
//     }, () => {
//       console.log(this.state)
//       this.filteredData()
//     })
//   }
//   filteredData() {
    
//       var newData = this.state.listingsData.filter((item) => {
//         return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
//       })

//       if(this.state.city != "All"){
//         newData = newData.filter((item) => {
//           return item.city == this.state.city
//         })
//       }

//       if(this.state.homeTypes != "All"){
//         newData = newData.filter((item) => {
//           return item.homeTypes == this.state.homeTypes
//         })
//       }

//       this.setState({
//         filteredData : newData
        
//       })
//   }

//   populateForms() {
//     // city
//     let cities = this.state.listingsData.map((item) => {
//       return item.city
//     })
//     cities = new Set(cities)
//     cities = [...cities]


//     // types
//     let homeTypes = this.state.listingsData.map((item) => {
//       return item.homeType
//     })
//     homeTypes = new Set(homeTypes)
//     homeTypes = [...homeTypes]


//     // rooms
//     let bedrooms = this.state.listingsData.map((item) => {
//       return item.rooms
//     })
//     bedrooms = new Set(bedrooms)
//     bedrooms = [...bedrooms]

//     this.setState({
//       populateFormsData: {
//         homeTypes,
//         bedrooms,
//         cities
//       }
//     }, () => {
//       console.log(this.state)
//     })
//   }


//   render () {
//     return (<div> 
//       <Header />
//       <section id="content-area">
//       <Filter change={this.change} globalState={this.state}
//         populateAction={this.populateForms}
//       />
//       <Listings listingsData={this.state.filteredData} />
//       </section>
//     </div>)
//   }
// }

// const app = document.getElementById('app')

// ReactDOM.render(<App />, app)