import React, {Component} from 'react';
import axios from 'axios';
import './JobsWall.css';
import JobCard from '../job_card/JobCard';
import JobModal from '../job_wall/JobModal';
import PageBar from '../page_bar/PageBar';
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
            totalJobs: 0,
            totalPages: 0,
            limit: 4,
            offset: 0,
            curPage: 1,
            pages: [],
            pageBarDisplay: null
        };

        this.toggle = this.toggle.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        this.setupPageBar();
        this.getJobs();
    }

    setupPageBar() {
        axios.get("/api/job/total_count")
            .then(res => {
                const total_jobs = res.data.total;
                const total_pages = Math.ceil(total_jobs / this.state.limit);
                var pages = [];
                for (var i = 1; i <= total_pages; i++) {
                    pages.push(i);
                }
                this.setState({
                  totalJobs: total_jobs,
                  totalPages: total_pages,
                  pages: pages
                })
                
                const props = {
                  offset: this.state.offset,
                  limit: this.state.limit,
                  pages: this.state.pages,
                  onPageChange: this.onPageChange
                }
                
                this.setState({pageBarDisplay: <PageBar {...props} />});
            })
            .catch(err => console.error(err.toString()))
    }

    getJobs() {
        axios.get("/api/job/list_job/".concat(this.state.offset).concat("/").concat(this.state.limit))
            .then(res => {
                this.setState({jobs: res.data.jobList})
            })
            .catch(err => console.error(err.toString()))
    }

    onPageChange(event, data) {

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

                <Row>{ this.state.pageBarDisplay }</Row>
            </div>
        );
    }
}

export default JobsWall;
