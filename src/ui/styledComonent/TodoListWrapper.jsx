import { Box, styled } from "@mui/material";

export const TodoListWrapper = styled(Box)`
  background-color: #352f5b;
  min-height: 100vh;
  padding: 50px;
  h4 {
    margin-bottom: 30px;
    text-align: center;
    font-size: 45px;
    font-weight: 700;
    color: white;
  }
  .input_stack {
    width: 500px;
    margin: auto;
    position: relative;
    button{
      box-shadow: none;
    position: absolute;
    top: 0;
    right: -1px;
 height: 56px;
    background-color: black;
    color: white;
    border-radius: 50px;
    padding: 3px 40px;
      &:hover{
        background-color: #313131;
      }
    }
  }
  .todo_list {
    ul {
      li {
        .MuiFormControlLabel-root {
          &.completed {
            > .MuiTypography-root {
              text-decoration: line-through;
              color: green;
            }
          }
        }
      }
    }
  }
  input[type="text"],
  input[type="text"]:focus {

    border: none;
 
    border-radius: 50px;
    background: white;
    color: black;
    padding-right: 170px;
  }


  .MuiOutlinedInput-notchedOutline{
    display: none;
  }
  .del_btn{
    background-color: transparent;
    padding: 0;
    min-width: auto;
    margin-left: auto;
  }
  .todo_list {
 
    max-width: 500px;
    margin: 30px auto 0;
    li {
    background-color: #423a6f;
    color: #f8f9fa;
    &:not(:last-child){
      margin-bottom: 20px;
    }
  }
  }
  .number{
    font-weight: bold;
    margin-right: 10px;
  }
  .check {
    svg{
      path{
        fill: white;
      }
    }
  }
`;
