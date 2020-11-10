import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
      religion: '',
      agency: '',
      children: '',
      debut: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { gender, age, name, religion, agency,children,spouse,debut } = steps;
    this.setState({ gender, age, name, religion, agency,spouse,children,debut });
  }

  render() {
    const { gender, age, name, religion, agency,spouse, children, debut  } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>가명</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>성별</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>나이</td>
              <td>{age.value}</td>
            </tr>
            <tr>
              <td>종교</td>
              <td>{religion.value}</td>
            </tr>
            <tr>
              <td>소속사</td>
              <td>{agency.value}</td>
            </tr>
            <tr>
              <td>자녀</td>
              <td>{children.value}</td>
            </tr>
            <tr>
              <td>데뷔년도</td>
              <td>{debut.value}</td>
            </tr>
            <tr>
              <td>배우자</td>
              <td>{spouse.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
      religion: '',
      agency: '',
      children: '',
      debut: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { gender, age, name, religion, agency,children,spouse,debut } = steps;
    this.setState({ gender, age, name, religion, agency,spouse,children,debut });
  }

  render() {
    // ['age', 'real_name', 'religion', 'agency', 'spouse', 'children','debut_year', 'gender', 'state'])
    // const { gender, age, name, religion, agency, spouse, children, debut  } = this.state;
    // axios.get(`http://localhost:8080/api/access`,
    // {"age":age, "real_name":name, "religion":religion,"agency":agency,"spouse":spouse,"children":children, "debut":debut,"gender":gender})
    // .then(res=>{
    //   alert("배우 완료")
    //   window.location.reload()
    // })
    // .catch(e => {
    //   alert('Database 에 없는 배우 입니다.')
    // })
  
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
      </div>
    );
  }
}

Answer.propTypes = {
  steps: PropTypes.object,
};

Answer.defaultProps = {
  steps: undefined,
};

class MyChatbot extends Component {
  render() {
    return (
      <ChatBot
        steps={[

          { 
            id: '1',
            message: "배우의 성별은 어떻게 됩니까?",
            trigger: "gender"
         },
         {
          id: 'gender',
          options: [
              {value: 1, label: '배우는 남자입니다', trigger: '2' },
              {value: 0, label: '배우는 여자입니다', trigger: '2'},
          ],
          },
          {
            id: '2',
            message: "배우의 나이는 어떻게 됩니까?",
            trigger: "age"
         },
         {
          id: 'age',
          user: true,
          trigger: '3',
          validator: (value) => {
            if (isNaN(value)) {
              return 'value must be a number';
            } else if (value < 0) {
              return 'value must be positive';
            } else if (value > 120) {
              return `${value}? Come on!`;
            }

            return true;
          },
        },
        
        {
          id: '3',
          message: "배우는 가명이 있습니까?",
          trigger: 'name',
        },
        {
        id: 'name',
        options: [
            {value: 1, label: '예 가명이 있습니다', trigger: '4' },
            {value: 0, label: '아니요 본명으로 활동 중입니다', trigger: '4'},
          ]
        },
          
        {
          id: '4',
          message: '종교가 있습니까?',
          trigger: 'religion',
        },
        {
          id: 'religion',
          options: [
              {value: 1, label: '예 종교가 있습니다', trigger: '5' },
              {value: 0, label: '아니요 종교가 없습니다', trigger: '5'},
          ]
        },
        
        {
          id: '5',
          message: '소속사가 있습니까?',
          trigger: 'agency'
        },
        {
          id: 'agency',
          options: [
              {value: 1, label: '예 소속사가 있습니다', trigger: '6' },
              {value: 0, label: '아니요 소속사가 없습니다', trigger: '6'},
          ] 
        },
        {
          id: '6',
          message: '자녀가 있습니까?',
          trigger: 'children',
        },
        {
          id: 'children',
          options: [
              {value: 1, label: '예 있습니다', trigger: '7' },
              {value: 0, label: '아니요 없습니다', trigger: '7'},
          ] 
        },
        {
          id: '7',
          message: '데뷔년도는 몇년도 입니까?',
          trigger: 'debut',
        },
        {
          id: 'debut',
          user: true,
          trigger: '8',
        },
        {
          id: '8',
          message: '배우자가 있습니까?',
          trigger: 'spouse',
        },
        {
          id: 'spouse',
          options: [
              {value: 1, label: '예 있습니다', trigger: '9' },
              {value: 0, label: '아니요 없습니다', trigger: '9'},
          ] 
        },
        {
          id: '9',
          message: "정보를 확인 하십시요, 1 = 있음, 0 = 없음",
          trigger: 'review',
        },
        {
          id: 'review',
          component: <Review />,
          asMessage: true,
          trigger: 'update',
        },
        {
          id: 'update',
          message: '정보를 수정 하시겠습니까?',
          trigger: 'update-question',
        },
        {
          id: 'update-question',
          options: [
            { value: 'yes', label: '예, 수정 하겠습니다', trigger: 'update-yes' },
            { value: 'no', label: '아니요', trigger: 'end-message' },
          ],
        },
        {
          id: 'update-yes',
          message: '어떤 정보를 수정 하시겠습니까?',
          trigger: 'update-fields',
        },
        {
          id: 'update-fields',
          options: [ // gender, age, name, religion, agency, children, debut 
            { value: 'name', label: '가명 여부', trigger: 'update-name' },
            { value: 'gender', label: '성별', trigger: 'update-gender' },
            { value: 'age', label: '나이', trigger: 'update-age' },
            { value: 'religion', label: '종교 여부', trigger: 'update-religion' },
            { value: 'agency', label: '소속사', trigger: 'update-agency' },
            { value: 'children', label: '자녀', trigger: 'update-children' },
            { value: 'debut', label: '데뷔년도', trigger: 'update-debut' },
            { value: 'spouse', label: '배우자 여부', trigger: 'update-spouse' },
          ],
        },
        {
          id: 'update-name',
          update: 'name',
          trigger: '9',
        },
        {
          id: 'update-spouse',
          update: 'spouse',
          trigger: '9',
        },
        {
          id: 'update-gender',
          update: 'gender',
          trigger: '9',
        },
        {
          id: 'update-age',
          update: 'age',
          trigger: '9',
        },
        {
          id: 'update-religion',
          update: 'religion',
          trigger: '9',
        },
        {
          id: 'update-agency',
          update: 'agency',
          trigger: '9',
        },
        {
          id: 'update-children',
          update: 'children',
          trigger: '9',
        },
        {
          id: 'update-debut',
          update: 'debut',
          trigger: '9',
        },
        {
          id: 'end-message',
          component: <Answer />,
          asMessage: true,
          end: true,
        },
        ]}
      />
    );
  }
}

export default MyChatbot;