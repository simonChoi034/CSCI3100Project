import React, {Component} from 'react';
import './PageBar.css';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

class PageBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curPage: props.curPage,
            pages: props.pages,
            onPageChange: props.onPageChange,
            pageItems: []
        };
    }

    componentDidMount() {
        this.updatePagination(this.state.curPage);
    }

    updatePagination(newPage) {
        const curPage = newPage;
        var item = [];

        // prev page part
        if (curPage <= 1) {
            item.push(
                <PaginationItem key={1} disabled>
                    <PaginationLink first />
                </PaginationItem>
            );
            item.push(
                <PaginationItem key={2} disabled>
                    <PaginationLink previous />
                </PaginationItem>
            );
        }
        else {
            item.push(
                <PaginationItem key={1}>
                    <PaginationLink first onClick={ (event) => {this.state.onPageChange(event, 1); this.updatePagination(1);}} />
                </PaginationItem>
            );
            item.push(
                <PaginationItem key={2}>
                    <PaginationLink previous onClick={ (event) => {this.state.onPageChange(event, curPage-1); this.updatePagination(curPage-1);}} />
                </PaginationItem>
            );
        }
        // page number part
        var key = 3;
        this.state.pages.map((value) => {
            if (value == curPage) {
                item.push(
                    <PaginationItem active key={key}>
                        <PaginationLink>{value}</PaginationLink>
                    </PaginationItem>
                );
            }
            else {
                item.push(
                    <PaginationItem key={key}>
                        <PaginationLink onClick={(event) => {this.state.onPageChange(event, value); this.updatePagination(value);}}>{value}</PaginationLink>
                    </PaginationItem>
                );
            }
            key = key + 1;
        })  
        // next page part
        const lastPage = this.state.pages[this.state.pages.length - 1];
        if (curPage >= lastPage) {
          item.push(
              <PaginationItem key={key} disabled>
                  <PaginationLink next />
              </PaginationItem>
          );
          item.push(
              <PaginationItem key={key+1} disabled>
                  <PaginationLink last />
              </PaginationItem>
          );
      }
      else {
          item.push(
              <PaginationItem key={key}>
                  <PaginationLink next onClick={ (event) => {this.state.onPageChange(event, curPage+1); this.updatePagination(curPage+1);}} />
              </PaginationItem>
          );
          item.push(
              <PaginationItem key={key+1}>
                  <PaginationLink last onClick={ (event) => {this.state.onPageChange(event, lastPage); this.updatePagination(lastPage);}} />
              </PaginationItem>
          );
      }

        this.setState({
            curPage: curPage,
            pageItems: item
        });
    }

    render() {
        return (
            <div className="mx-auto">
              <Pagination aria-label="Pages">
                {this.state.pageItems}
              </Pagination>
            </div>
        );
    }
}

export default PageBar;
