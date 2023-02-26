import React, { Component } from 'react'
import { Container } from '../components/Container'

export class About extends Component {
  render() {
    return (
      <Container>
         <div className='about-title'>Out Team</div>
        <div className='about-card'>
          <div className='about__image'>
            <img src='https://www.strangearts.ru/sites/default/files/styles/heroes_main_picture/public/292px-supergirl_vol_6_1_textless.jpg' alt="super girl"/>
          </div>
          <div className='about-person-info'>
            <div className='about__title'>Mila Koseckaya</div>
              <div className='about__desc'>Team lead, frontend developer</div>
              <div className='about__text'>
                <p>Application architecture development, routing setup.</p>
                <p>Connecting and working with third party APIs
                to get recipes and food nutrients.</p>
                <p>Used jest framework to write unit tests for all application components.</p>
                <p>Implemented dark mode functionality for the application</p>
              </div>

          </div>
        </div>
        <div className='about-card'>
          <div className='about__image'>
            <img src='https://www.strangearts.ru/sites/default/files/styles/heroes_main_picture/public/kavaler7.jpg' alt="Cavalier"/>
          </div>
          <div className='about-person-info'>
            <div className='about__title'>Yuri Skripal</div>
              <div className='about__desc'>Frontend developer</div>
              <div className='about__text'>
                <p>Application architecture development, routing setup.</p>
                <p>Connecting and working with third party APIs
                to get recipes and food nutrients.</p>
                <p>Used jest framework to write unit tests for all application components.</p>
                <p>Implemented dark mode functionality for the application</p>
              </div>

          </div>
        </div>
             <div className='about-card'>
          <div className='about__image'>
            <img src='https://cdn.discordapp.com/attachments/1068259899127111705/1079470778854150224/734574-sorrow1.png' alt="Cavalier"/>
          </div>
          <div className='about-person-info'>
            <div className='about__title'>SiverianSerpent</div>
              <div className='about__desc'>Frontend developer</div>
              <div className='about__text'>
                <p>Application architecture development, routing setup.</p>
                <p>Connecting and working with third party APIs
                to get recipes and food nutrients.</p>
                <p>Used jest framework to write unit tests for all application components.</p>
                <p>Implemented dark mode functionality for the application</p>
              </div>

          </div>
        </div>
       
      </Container>
    )
  }
}