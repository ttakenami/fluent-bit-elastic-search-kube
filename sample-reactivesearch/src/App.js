import React, {Component} from 'react';
import {DataSearch, ReactiveBase, ReactiveList, ResultList, SelectedFilters} from '@appbaseio/reactivesearch';
import './App.css';
import './search.css'

const {ResultListWrapper} = ReactiveList;

class App extends Component {
    render() {
        return (
            <div className="main-container">
                <ReactiveBase
                    app="data-platform"
                    url="http://localhost:9200"
                    //credentials="elastic:changeme"
                    theme={
                        {
                            typography: {
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: '16px',
                            },
                            colors: {
                                titleColor: '#c7d5e0',
                                textColor: '#c7d5e0',
                                backgroundColor: '#212121',
                                primaryColor: '#2B475E',
                            }
                        }
                    }
                >
                    <DataSearch
                        componentId="title"
                        dataField={["kubernetes.container_name"]}
                        queryFormat="and"
                        placeholder="enter kubernetes container_name"
                        showIcon={false}
                        title="kubernetes.container_name"
                        className="data-search"
                        innerClass={{
                            input: 'input',
                            list: 'list',
                        }}
                    />
                    <SelectedFilters/>
                    <ReactiveList
                        componentId="resultLists"
                        dataField="dplog.count"
                        size={25}
                        pagination={true}
                        react={{
                            "and": ["title"]
                        }}
                        sortOptions={[
                            {label: "Lowest count", dataField: "dplog.count", sortBy: "asc"},
                            {label: "Highest count", dataField: "dplog.count", sortBy: "desc"},
                        ]}
                        className="result-list"
                        innerClass={{
                            resultsInfo: "resultsInfo",
                            resultStats: "resultStats",
                        }}
                    >
                        {({data}) => (
                            <ResultListWrapper>
                                {
                                    data.map(item => (
                                        <ResultList
                                            key={item._id}
                                            className="listItem"
                                        >
                                            <ResultList.Content>
                                                <ResultList.Title
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.kubernetes.container_name
                                                    }}
                                                />
                                                <ResultList.Description>
                                                <p className="id">{item._id}</p>
                                                </ResultList.Description>
                                                <ResultList.Description>
                                                    <p className="date">{item.dplog.date}</p>
                                                    <p className="count">{item.dplog.count}</p>
                                                </ResultList.Description>
                                            </ResultList.Content>
                                        </ResultList>
                                    ))
                                }
                            </ResultListWrapper>
                        )}
                    </ReactiveList>
                </ReactiveBase>
            </div>
        );
    }
}

export default App;
