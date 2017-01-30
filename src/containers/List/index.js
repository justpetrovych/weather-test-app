import React, { Component, PropTypes } from 'react';
import { Row, FormGroup, FormControl, Button, Tabs, Tab, Form, Col, InputGroup, Modal } from 'react-bootstrap';
import localStorage from 'localStorage';
import CurrentCity from '../CurrentCity';
import Card from '../Card';
import TabTitle from '../../components/TabTitle';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCity: '',
      cities: this.props.cities,
      activeKey: this.props.activeKey,
      validationState: '',
      showModal: false,
    };
    this.addCity = this.addCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleDelete(city) {
    const cities = this.state.cities;
    const notify = this.props.notify;
    cities.splice(cities.indexOf(city), 1);
    localStorage.setItem('cities', cities.join());
    this.setState({
      cities,
    });
    notify.show(`Deleted city ${city}`, 'success', 3000);
  }

  handleSubmit(event) {
    event.preventDefault();

    const cities = this.state.cities;
    const notify = this.props.notify;
    cities.push(this.state.newCity);
    localStorage.setItem('cities', cities.join());
    notify.show(`Added city ${this.state.newCity}`, 'success', 3000);
    this.setState({
      cities,
      newCity: '',
      validationState: '',
      activeKey: this.state.cities.length - 1,
      showModal: false,
    });
  }

  handleSelect(key) {
    localStorage.setItem('key', key);
    this.setState({
      activeKey: key,
    });
  }

  addCity(event) {
    this.setState({
      newCity: event.target.value,
    });
    const length = this.state.newCity.length;
    if (length > 1) {
      this.setState({
        validationState: 'success',
      });
    } else {
      this.setState({
        validationState: 'error',
      });
    }
  }

  handleOpenModal() {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <Row>
        <CurrentCity notify={this.props.notify} />
        <Button className="add-btn"bsStyle="primary" onClick={this.handleOpenModal}>+</Button>
        <Tabs
          className={this.state.cities.length ? 'tabs' : 'disnone'}
          activeKey={+this.state.activeKey}
          onSelect={this.handleSelect} id="tab"
        >
          {
            this.state.cities.map((el, key) =>
              <Tab
                eventKey={key}
                key={key}
                title={<TabTitle elName={el} onDel={this.handleDelete} />}
              >
                <Card cityName={el} key={el} onDel={this.handleDelete} notify={this.props.notify} />
              </Tab>
            )
          }
        </Tabs>
        <div className={this.state.cities.length ? 'disnone' : 'bottom-block'}>-</div>
        <Modal bsSize="small" show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter city name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col style={{ margin: '20px 0' }}>
              <Form onSubmit={this.handleSubmit} inline>
                <FormGroup
                  validationState={this.state.validationState || null}
                >
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Add new city"
                      value={this.state.newCity}
                      onChange={this.addCity}
                    />
                    <InputGroup.Button>
                      { this.state.validationState === 'success'
                        ? <Button type="submit">Submit</Button>
                        : <Button type="submit" disabled>Submit</Button>
                      }
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </Form>
            </Col>
          </Modal.Body>
        </Modal>
      </Row>
    );
  }
}

List.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeKey: PropTypes.string.isRequired,
  notify: PropTypes.shape({
    show: PropTypes.func.isRequired, //eslint-disable-line react/no-unused-prop-types
    /* this is eslint bug https://github.com/yannickcr/eslint-plugin-react/issues/871 */
  }),
};

export default List;
