import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<video
				poster="https://www.slrlounge.com/wp-content/uploads/2019/10/giphy-2.gif"
				id="bgvid"
				playsInline
				autoPlay
				muted
				loop>
				{/* 
- Video needs to be muted, since Chrome 66+ will not autoplay video with sound.
WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  */}
				{/* <source src="https://im6.ezgif.com/tmp/ezgif-6-9f0f7cedb548.gif" type="video/webm" />
				<source src="https://im6.ezgif.com/tmp/ezgif-6-9f0f7cedb548.gif" type="video/mp4" /> */}
			</video>
			<div id="polina">
				<h2>juanhphotography</h2>
				<p>filmed by Juan Hernadez </p>
				<p>
					<a href="https://www.juanhphotography.com/about-me">original article</a>
				</p>
				<p>
					Thank you for visiting my page. I am an experienced photographer who has worked as a music
					photojournalist and a general life photographer for MANY years, you can see that work In this link
					to my other page on this button
					<p>
						<button>
							<a href="https://www.j18photography.com/">j18photography</a>
						</button>
					</p>
				</p>
				<p>
					Over the past couple of years, I have been creating memories for loved ones and friends like you.
					They want a creative and caring quality that can only be captured by someone that sees you not just
					as someone that wants pictures but someone that expects artistic meaning in their photos. I want you
					to print these images, I want you to be able to share what we created with not just your friends but
					your families as well.
				</p>
				<p>I hope to talk to you, I sincerely do.</p>
				<p>Thank you for visiting</p>
			</div>
		</div>
	);
};
