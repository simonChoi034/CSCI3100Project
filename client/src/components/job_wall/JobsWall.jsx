import React, {Component} from 'react';
import axios from 'axios';
import './JobsWall.css';
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

class JobsWall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            modal: false,
            modalData: null,
            limit: 8,
            offset: 0,
            page: []
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        axios.get("/api/job/list_job")
            .then(res => {
                this.setState({jobs: res.data.jobList})
            })
            .catch(err => console.error(err.toString()))
    }

    toggle(event, data) {
        this.setState(prevState => ({
            modal: !prevState.modal,
            modalData: data
        }));
    }

    createModal() {
        const props = {
            modal: this.state.modal,
            toggle: this.toggle,
            className: this.props.className,
            modalData: this.state.modalData
        };

        return (
            <JobModal {...props}/>
        )
    }

    updatePagination() {

    }

    render() {
        return (
            <div>
            <Fade>
                { this.createModal() }
                {
                    this.props.currentUser && !this.props.isTutor ?
                        <Row className="mx-0"><Button color="success" className="m-0" onClick={this.props.openForm}>Request a job</Button></Row>
                        : null
                }
                <Row>
                    {this.state.jobs.map((job, key) => 
                        <JobCard key = {key} job={job} toggle={this.toggle}/>
                    )}
                </Row>
            </Fade>

            <Row>
            
            <Pagination aria-label="Page navigation example">
            <PaginationItem disabled>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">
                  {this.state.offset / this.state.limit}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  {this.state.offset / this.state.limit}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
            </Pagination>
            </Row>
            </div>
        );
    }
}

export default JobsWall;
