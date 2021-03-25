// Base
import React from 'react'
// Intern
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Container, Title, Text } from './style'
//Variables

const Terms = ({openModal}) => {

  return (
    <>
      <Navbar openModal={openModal}/>
      <Container>
        <Title>Terms</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius finibus lorem ut cursus. Nulla nec hendrerit quam. Nulla eleifend cursus elementum. Nullam in turpis auctor, luctus lectus eget, malesuada dui. Cras hendrerit, ante non pharetra vestibulum, felis magna finibus lectus, sit amet ultrices orci erat et odio. In finibus augue in fermentum venenatis. Nullam ultrices augue arcu, sed imperdiet purus ultricies quis. Nulla vel leo ut urna congue tincidunt. Curabitur fermentum ullamcorper velit id iaculis. Aliquam nisi leo, ornare et libero vel, consequat mollis urna. Etiam vitae nisi commodo, aliquam justo vitae, congue metus. Proin sagittis varius ex, eget condimentum felis feugiat et.

Phasellus id lacus neque. Cras tincidunt finibus turpis, a fermentum sapien consequat vitae. Quisque augue ligula, mattis et nibh et, vestibulum volutpat arcu. Mauris pellentesque nulla mi, eget blandit arcu sagittis sit amet. Phasellus consectetur diam sed elit ultrices, a gravida leo interdum. Vivamus aliquam a eros in placerat. Nunc sed elit non magna lobortis tristique. Quisque tincidunt vel quam eu tempor. Curabitur laoreet mi a metus vulputate, vel varius justo scelerisque. Praesent felis magna, pharetra sed erat sed, molestie laoreet sem. Aenean sit amet interdum odio. Fusce hendrerit nibh eget ligula efficitur commodo quis nec odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum luctus massa a mi venenatis, in suscipit sem rhoncus. Aenean non felis ac tortor egestas vestibulum sit amet quis augue.

Nunc at lacus vel mauris dictum lacinia eget vitae nisl. Nullam erat tortor, pretium vitae justo at, fringilla elementum sem. Curabitur at ante eu mi ullamcorper tristique. Vestibulum lacinia, lectus ut euismod rutrum, ipsum urna dictum dui, ornare blandit orci purus non velit. Praesent scelerisque at lorem ac sollicitudin. Sed eget nulla eleifend, varius leo sit amet, pretium metus. Vestibulum nec suscipit felis, at aliquam enim. Aliquam tortor est, elementum et euismod a, tempor eget leo. Praesent sit amet auctor nisl. Pellentesque eu aliquet nibh. Aenean a est aliquam, lacinia lorem et, aliquet elit.

Ut dolor neque, laoreet ac vestibulum nec, lobortis eget leo. Donec malesuada imperdiet posuere. Curabitur nec ex eget leo sollicitudin vestibulum. Aenean pellentesque, erat vel finibus fermentum, ante diam aliquet metus, ac condimentum quam purus non dui. Vestibulum non viverra nisi. Morbi at laoreet felis, at egestas metus. In venenatis cursus pretium. Nam blandit luctus dignissim. Donec nunc turpis, dictum non laoreet eu, efficitur non felis. Nunc pretium auctor purus, ut congue neque laoreet malesuada. In hac habitasse platea dictumst.

Cras pretium viverra sapien, a suscipit erat sodales non. Nam laoreet elit vitae volutpat suscipit. Duis ut erat mi. Nullam cursus nibh a nunc condimentum ullamcorper. Vivamus tempus rutrum lectus sed pharetra. Donec lobortis libero quis risus fringilla, eget malesuada nisl porta. Cras ut rutrum arcu. Praesent auctor lacinia sagittis. Maecenas at ullamcorper tortor, vel viverra dui. Nullam cursus vel augue auctor tincidunt. Sed ut rutrum neque, non aliquet tortor. Cras ullamcorper pellentesque vestibulum. Nunc non placerat orci. Nulla mollis at ipsum at volutpat.</Text>
      </Container>
      <Footer openModal={openModal}/>
    </>
   )
}

export default Terms
