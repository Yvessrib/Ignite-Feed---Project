/* eslint-disable react/jsx-key */
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

import './global.css';
import styles from './App.module.css'

// author: {avatar_url: "", name: "", role:""}
// piblishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/102707257?v=4",
      name: "Yves Antônio",
      role: "Diretor CP2eJr"
    },

    content: [
      { type: 'paragraph', content: 'Fala galera 🖐' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio; É um projeto que eu fiz no NLW Return, evento da rocktseat' },
      { type: 'link', content: '👉 yves.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @RocketSeat"
    },

    content: [
      { type: 'paragraph', content: 'Fala galera 🖐' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio; É um projeto que eu fiz no NLW Return, evento da rocktseat' },
      { type: 'link', content: '👉 yves.design/doctorcare' },
    ],
    publishedAt: new Date('2023-11-22 15:04:00'),
  },
]


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}

export default App
