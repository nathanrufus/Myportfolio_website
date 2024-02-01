import React from "react"

function Home() {
	return <div className=" px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]">
		<div>
			<div>
				{/* texts */}
				<div className=" text-white">
					<h6 className=" text-3xl mt-12">Hello ,I'm</h6>
					<h1 className=" font-semibold text-3xl md:text-5xl my-4">Kibet Nathan</h1>
					<p className=" md:w-96"> Freelance U designer, Fullstack developer ,& Data Miner , I create seamless web experiences for end-users</p>
					{/* buttons */}
					<div className=" mt-5">
						<button className=" btn bg-blue-500 py-2 px-4 text-white rounded hover:bg-white hover:text-blue-500 transition-all duration-500">About me</button>
						<button className=" btn outline px-6 py-1.5 rounded border-none text-white ml-5">Projects</button>
					</div>
				</div>
				{/* image */}
				<div>
					<img src="" alt="" />
				</div>
			</div>
		</div>
	</div>
}

export default Home
