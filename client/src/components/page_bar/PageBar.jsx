import React, {Component} from 'react';
import axios from 'axios';
import './PageBar.css';
import JobCard from '../job_card/JobCard';
import JobModal from '../job_wall/JobModal';
import {
    Button,
    Row,
    Fade,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

class PageBar extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            limit: props.limit,
            offset: props.offset,
            pages: props.pages,
            curPage: 1,
            pageItems: []
        };
    }

    componentDidMount() {
        this.updatePagination();
    }

    updatePagination() {
        var item = [];
        console.log(this.state);
        this.state.pages.map((value, key) => {
            if (value == this.state.curPage) {
                item.push(
                    <PaginationItem active key={key}>
                        <PaginationLink>{value}</PaginationLink>
                    </PaginationItem>
                );
            }
            else {
                item.push(
                    <PaginationItem key={key}>
                        <PaginationLink>{value}</PaginationLink>
                    </PaginationItem>
                );
            }
        })  

        this.setState({pageItems: item});
    }

    render() {
        return (
            <div className="mx-auto">
              <Pagination aria-label="Pages">
                <PaginationItem disabled>
                  <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem disabled>
                  <PaginationLink previous href="#" />
                </PaginationItem>
                {this.state.pageItems}
                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink last href="#" />
                </PaginationItem>
              </Pagination>
            </div>
        );
    }
}

export default PageBar;
