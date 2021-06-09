import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<div>
			<div>
				<div id="slider">
					<figure className="slide_img">
						<img
							src="https://m.22slides.com/jhernandez/anrepark231217-14-6230.jpg?auto=format&w=1200&s=227975a1771859cca0c14d380e842df1"
							alt="Juicy"
							width={1665}
							height={800}
						/>
						{/* <figcaption>Can be Juicy !</figcaption> */}
					</figure>
					<figure className="slide_img">
						<img
							src="https://m.22slides.com/jhernandez/20200812-dscf1067-5043.jpg?auto=format&w=1000&s=84339576f0622c1dd4cc44f349cae0a3"
							alt="Bridge"
							width={1665}
							height={800}
						/>
						{/* <figcaption>Iron piece between two part of land</figcaption> */}
					</figure>
					<figure className="slide_img">
						<img
							src="https://m.22slides.com/jhernandez/20200917-dscf2468-1017.jpg?auto=format&w=1000&s=385b92109fa43d424e096a8c4f960587"
							alt="Taking pics"
							width={1665}
							height={800}
						/>
						{/* <figcaption>Photography is magic</figcaption> */}
					</figure>
				</div>
			</div>
		</div>
		<figure className="snip1336">
			<img
				src="https://m.22slides.com/jhernandez/sonyrx100vi9-6878.jpg?auto=format&w=800&s=d25b5d75b9ed6af660da40a435c50299"
				alt="sample87"
			/>
			<figcaption>
				<img
					src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/102414262_10158526496309468_7766513217142245399_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=y2VS0Jf7w-IAX-8ZeHp&_nc_oc=AQmjrePG_p_vnocaeg-dAp8ATtv5wYrK143N5xeBoPggoFY4HLJw9gas0PH6GVAhv8agychG15OKRsK46OO0425S&_nc_ht=scontent-mia3-2.xx&oh=7d7899980fc72f934314b7cd90bfb9ba&oe=60E6BCEB"
					alt="profile-sample4"
					className="profile"
				/>
				<h2>
					Juan Hernandez
					<span>Photagrapther</span>
				</h2>
				<p>
					Thank you for visiting my page. I am an experienced photographer who has worked as a music
					photojournalist and a general life photographer for MANY years, you can see that work In this link
					to my other page on this button
				</p>
				<a href="/demo" className="follow">
					More Bio
				</a>
				<a href="https://www.facebook.com/Juanpointeight" className="info">
					Fallow
				</a>
			</figcaption>
		</figure>
		<div className="wrapper">
			<div className="item">
				<div className="fuji">
					<img src="https://image.ibb.co/b8UJBc/administration_architecture_big_ben_221166.jpg" />
					<div className="caption">I Miss London</div>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg" />
					<div className="caption">Love ballons</div>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://image.ibb.co/hQaarc/antique_blur_camera_828378.jpg" />
					<div className="caption">Vintage life </div>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://image.ibb.co/crFarc/pexels_photo_100756.jpg" />
					<div className="caption">Summer Day</div>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" />
					<div className="caption">Art</div>
				</div>
			</div>
		</div>
	</div>
);
