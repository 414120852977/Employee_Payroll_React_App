import React from 'react';
import   './home.scss'; 

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="column-content">
                    <div className = "emp-detail">
                        <div className= "detail-text">
                            Employee Details<div className="count"></div>
                            </div>
                            <div className="row center button-box">
                                <div className='search-box' onClick={this.openSearch}>
                                    <input className={"input "+ (this.state.searchExpand && 'input-expand')}
                                    onChange={this.search} type="text" placeholder=""/>
                                    <img className="search-icon" src={searchIcon} alt="" />
                                </div>

                                <Link to ="payroll-form" className="add-button flex-row-counter">
                                    <img src={addIcon} alt="" />Add User </Link>
                                    </div>

                                    <div className="table-main">
                                        <Display employeeArray={this.state.employeeArray}/>
                                            </div>
                                            </div>
                                            </div>
            </div>
        );
    }
}

export default Home;