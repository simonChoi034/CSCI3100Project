import React, {Component} from 'react';
import axios from 'axios';
import './TutorsWall.css';
import TutorCard from '../tutor_card/TutorCard';
import PageBar from '../page_bar/PageBar';
import {
    Container,
    Button,
    Row,
    Fade
} from 'reactstrap';
import TutorModal from './TutorModal';

class TutorsWall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tutors: [],
            modal: false,
            modalData: null,
            totalTutors: 0,
            totalPages: 0,
            limit: props.limit,
            offset: 0,
            curPage: 1,
            pages: [],
            pageBarDisplay: null,
            homeCall: props.homeCall
        };

        this.toggle = this.toggle.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        this.setupPageBar();
        this.getTutors(this.state.offset, this.state.limit);
    }

    getTutors(offset, limit) {
      axios.get("/api/user/list_tutor/?offset=".concat(offset).concat("&limit=").concat(limit))
      .then(res => {
          this.setState({
              tutors: res.data.tutorList
          })
      })
      .catch(err => console.error(err.toString()))
    }

    setupPageBar() {
        axios.get("/api/user/tutor_total_count")
            .then(res => {
                const total_tutors = res.data.total;
                const total_pages = Math.ceil(total_tutors / this.state.limit);
                var pages = [];
                for (var i = 1; i <= total_pages; i++) {
                    pages.push(i);
                }
                this.setState({
                  totalTutors: total_tutors,
                  totalPages: total_pages,
                  pages: pages
                })
                
                this.updatePageBar();
            })
            .catch(err => console.error(err.toString()))
    }

    updatePageBar() {
      const props = {
          curPage: 1 + Math.floor(this.state.offset / this.state.limit),
          pages: this.state.pages,
          onPageChange: this.onPageChange
      }
      this.setState({pageBarDisplay: <PageBar {...props} />});
    }

    onPageChange(event, page) {
        const new_offset = (page - 1) * this.state.limit;
        this.setState({
            offset: new_offset,
            curPage: page
        });
        this.getTutors(new_offset, this.state.limit);
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
            <TutorModal {...props}/>
        )
    }

    render() {
        return (
            <div>
                <Fade>
                    { this.createModal() }
                    <Row>
                        {this.state.tutors.map((tutor, key) =>
                            <TutorCard key={key} tutor={tutor} toggle={this.toggle}/>
                        )}
                    </Row>
                </Fade>

                {
                    this.state.homeCall? 
                    <Button outline color="info" href="/tutors">View More</Button> : 
                    <Row>{ this.state.pageBarDisplay }</Row>
                }
                
            </div>
        );
    }
}

export default TutorsWall;
