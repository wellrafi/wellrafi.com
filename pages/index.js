import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Prev App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<nav className="navbar">
					<div className="container">
						<a href="/" className="navbar-brand mr-auto">
							<img className="logo" src="https://avatars2.githubusercontent.com/u/57252069?s=460&u=466ef54f61129133bc0586c50dfe6de69dfbcd13&v=4" alt=""/>
						</a>
						<div className="nav-menu">
              <Link href="/aboutme">
                <a className="text-light">about me</a>
              </Link>
            </div>
					</div>
				</nav>
				<div id="banner">
					<div className="container">
						<div className="outer-box-center">
							<div className="box-center">
								<span className="text-overlay">modern</span>
								<div className="text-hero-title">
									<p className="hero-pretitle">do with passion</p>
									<h1 className="hero-title">
										design & develop <br /> beautiful app
									</h1>
									<p className="hero-subtitle">
										Membangun aplikasi yang cepat, powerful serta modern <br /> yang pastinya
										membantu kebutuhan anda.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="circle-background">
						<div className="circle-1"></div>
						<div className="circle-2"></div>
						<div className="circle-3"></div>
						<div className="circle-4"></div>
					</div>
				</div>
			</header>
		</>
	);
}
