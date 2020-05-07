import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as S from './styles';

//Axios
import api from '../../services/api';

//MacAddress ${isConnected}
import isConnected from '../../utils/isConnected';

//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTask] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/${isConnected}`)
    .then(response => {
      setTask(response.data)
    })
  }

  function Notification() {
    setFilterActived('late')
  }

  useEffect(() => {
    loadTasks();

    if(!isConnected)
      setRedirect(true);

  }, [filterActived, loadTasks])

  return (
    <S.Container>
      { redirect && <Redirect to="/qrcode"/> }
      <Header clickNotification={Notification} />

        <S.FilterArea>

          <button type="button" onClick={() => setFilterActived("all")}>
            <FilterCard title="Todos" actived={filterActived === 'all'}/>
          </button>

          <button type="button" onClick={() => setFilterActived("today")}>
            <FilterCard title="Hoje" actived={filterActived === 'today'}/>
          </button>

          <button type="button" onClick={() => setFilterActived("week")}>
            <FilterCard title="Semana" actived={filterActived === 'week'}/>
          </button>

          <button type="button" onClick={() => setFilterActived("month")}>
            <FilterCard title="Mês" actived={filterActived === 'month'}/>
          </button>

          <button type="button" onClick={() => setFilterActived("year")}>
            <FilterCard title="Ano" actived={filterActived === 'year'}/>
          </button>

        </S.FilterArea>

        <S.Title>
          <h3>{ filterActived === 'late' ? 'ATIVIDADES ATRASADAS' : 'ATIVIDADES' }</h3>
        </S.Title>

        <S.Content>

          {
            tasks.map(t => (
              <Link to={`/task/${t._id}`}>
                <TaskCard type={t.type} title={t.title} when={t.when} />
              </Link>
            ))
          }
        </S.Content>

      <Footer/>
    </S.Container>
  )
}

export default Home;
