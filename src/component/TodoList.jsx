import React, { useState } from "react";

import { TodoListWrapper } from "../ui/styledComonent/TodoListWrapper";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Grid,
  List,
  ListItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DeleteIcon from "../ui/icons/DeleteIcon";

const todoSchema = yup.object().shape({
  todo: yup.string().trim().required("Please enter a Todo!!!"),
});

const TodoList = () => {
  const [list, setList] = useState([]);

  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(todoSchema),
    defaultValues: {
      todo: "",
    },
  });

  const formSubmit = (data) => {
    setList((prevValue) => [
      ...prevValue,
      { text: data?.todo, isCompleted: false },
    ]);
    setValue("todo", "");
  };

  const completeTodo = (incomingIndex) => {
    // console.log(incomingIndex,"data");
    setList((prevData) => {
      return prevData.map((item, index) => {
        if (index === incomingIndex) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    });
  };

  const deleteTodo = (deleteIndex) =>{
    setList((prevData)=>{
        return prevData.filter((_,index)=>{
            return index !== deleteIndex
        })
    })
  }

  console.log(list, "completeList");

  return (
    <TodoListWrapper>
      <Typography variant="h4">Todo List</Typography>
      <Box
        component={"form"}
        className="input_stack"
        onSubmit={handleSubmit(formSubmit)}
      >
      
            <Controller
              name="todo"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { invalid, error },
              }) => (
                <TextField
                  placeholder="Add a Todo..."
                  fullWidth
                  onChange={onChange}
                  value={value}
                  error={invalid}
                  helperText={error?.message}
                />
              )}
            />
        
            <Button variant="contained" color="primary" type="submit">
              Add Todo
            </Button>
       
      </Box>

      <Box className="todo_list">
        <List disablePadding>
          {list?.map((_data, index) => (
            <ListItem key={_data?.text}>
              <Typography variant="caption" className="number">{index + 1}. </Typography>
              <Box className="check">

            
              <FormControlLabel
              className={`${_data?.isCompleted ? 'completed' : ''}`}
                control={
                  <Checkbox
                    checked={_data?.isCompleted}
                    onChange={() => completeTodo(index)}
                  />
                }
                label={_data?.text}
              />
                </Box>
              <Button variant="contained" className="del_btn" onClick={()=>deleteTodo(index)}><DeleteIcon/></Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </TodoListWrapper>
  ); 
};

export default TodoList;
