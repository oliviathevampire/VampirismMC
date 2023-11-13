import Carousel from '@components/Carousel'

const Hero: React.FC = () => {
    return (
    	<section className="relative flex items-center justify-center h-screen bg-black text-white">
			<div className="absolute inset-0 opacity-50">
				<Carousel />
			</div>
        	<div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl p-4 md:space-x-4 space-y-4 md:space-y-0">
          		<div className="flex-1">
					<h1 className="text-4xl text-gold mb-4">Welcome to VampirismMC</h1>
					<p className="text-xl mb-4">Experience the medieval-vampire themed survival server.</p>
					<div className="flex space-x-4">
					<button className="px-4 py-2 text-black bg-gold rounded-lg">Learn More</button>
					<button className="px-4 py-2 text-white border-2 border-gold rounded-lg discord-btn">Join Discord</button>
					</div>
				</div>
			</div>
    	</section>
    );
  };
  
  export default Hero;