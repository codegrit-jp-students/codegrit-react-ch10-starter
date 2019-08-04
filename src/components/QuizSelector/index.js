import React,{ Component } from 'react';
import styled from '@emotion/styled/macro';

const QuizBox = styled.div({
  padding: 40,
  backgroundColor: '#faf7ff',
  border: '1px solid #B296F5',
  width: '30%',
  borderRadius: '10px',
  margin: 20,
  ':hover': {
    border: '2px solid #ad97ef'
  },
  cursor: 'pointer',
})

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: this.props.quizzes,
    };
  }
  render(){
    let quizzes = this.state.quizzes;
    let quiz = <div/>
    const selectQuiz = (index) => {
      this.props.handleSelect(index);
    }
    quiz = Object.values(quizzes).map((quiz, index) => {
      let quizTitle = quiz.title
      return(
        <QuizBox 
          key={quiz.title}
          onClick={() => selectQuiz(index)}
        >
          {quizTitle}
        </QuizBox>
      )
    })
    return(
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        {quiz}
      </div>
    )
  }
}