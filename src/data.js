import { v4 as uuid } from "uuid";

const DATA = [
  {
    id: uuid(),
    sectionName: 'MAINDISH',
    meals : [
      {
        id: uuid(),
        title: '销魂红烧肉',
        price: 1000,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '销魂红烧肉',
        price: 1000,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '销魂红烧肉',
        price: 1000,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '销魂红烧肉',
        price: 0,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '销魂红烧肉',
        price: 0,
        description: 'some_description'
      },
    ]
  },
  {
    id: uuid(),
    sectionName: 'SIDEDISH',
    meals : [
      {
        id: uuid(),
        title: '小菜',
        price: 1000,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '小菜',
        price: 1000,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '小菜',
        price: 1000,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '小菜',
        price: 0,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '小菜',
        price: 0,
        description: 'some_description'
      },
    ]
  },
  {
    id: uuid(),
    sectionName: 'DESERT',
    meals: [
      {
        id: uuid(),
        title: '甜品',
        price: 1000,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '甜品',
        price: 1000,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '甜品',
        price: 1000,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '甜品',
        price: 0,
        description: 'some_description'
      },
      {
        id: uuid(),
        title: '甜品',
        price: 0,
        description: 'some_description'
      },
    ]  
  }
]

export default DATA