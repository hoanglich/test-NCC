import './style.css'
import { image } from './access/image';

function App() {
  return (
    <div className="App">
            <section className='side-bar-list'>
                <li className='list_item'>
                  Home
                </li>
                <li className='list_item'>
                  Services
                </li>
                <li className='list_item'>
                  News
                </li>
                <li className='list_item'>
                  Blog
                </li>
                <li className='list_item'>
                  Contact
                </li>
            </section>
            <section className='wrap-content  '>
              <div className='wrap-body-content'>
                  <div className='body-content_logo'>
                      <img src={image.logo} alt='logo' className='image-logo'/>
                  </div>
                      <div className='body-content_header'>
                        <h5 className='content-text_header'>Lorem ipsum dolor sit asmet?</h5>
                        <p className='content-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                        </p>
                      </div>

                      <div className='wrap-content_list'>
                        <div className='body-content_item' >
                            <h5 className='content-text_body'>Lorem ipsum dolor sit amet</h5>
                            <div className='imag-and-content'>
                                <img src={image.cssImg} alt='image css' align="left" />
                                <p className='body-content_item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                            </div>
                        </div>
                        <div className='body-content_item' >
                            <h5 className='content-text_body'>Lorem ipsum dolor sit amet</h5>
                            <div className='imag-and-content'>
                                <img src={image.htmlImg} alt='image css' align="left" />
                                <p className='body-content_item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                            </div>
                        </div>
                        <div className='body-content_item' >
                            <h5 className='content-text_body'>Lorem ipsum dolor sit amet</h5>
                            <div className='imag-and-content'>
                                <img src={image.urlIcon} alt='image css' align="left"/>
                                <p className='body-content_item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                            </div>
                        </div>
                      </div>
              </div>
              <footer className='wrap-content-footer'>
                  Copyright © 2021
              </footer>
            </section>
    </div>
  );
}

export default App;
