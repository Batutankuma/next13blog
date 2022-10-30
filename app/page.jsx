import Image from "next/image";
import Japaness from '../public/images/gj.jpg'
import LuneAfrica from '../public/images/lune.jpg';

function HomePage() {
    return (
        <div>
            <h5 className="text-sm font-medium py-5"><span className="text-green-500">Scrum Master</span> and Developper</h5>
            <h1 className="text-4xl font-bold pb-2">Welcome To Blog Personnel</h1>
            <p className="font-sans mx-32">
                This has been one of my mantras - Focus and Simplicity. Keeping it simple can be harder than making it complex because you have to work hard to clear your mind and design a simple product.
                <span className="bg-teal-700 font-semibold p-1 text-white m-2">Steve Jobs.</span>
            </p>
            <Image src={Japaness} alt="japaness girl" width={900} height={900} className='m-auto py-7' />
            <div className="mx-32 text-justify">
                <p className="pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde iure eaque, aliquam consectetur totam accusamus, natus eos optio voluptas debitis alias sapiente nostrum, dolorum minus. Quod expedita mollitia incidunt quo.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sunt exercitationem earum autem. Iure debitis nostrum quae consectetur officiis ab doloremque, quia pariatur quidem nemo, voluptates eius itaque dicta nam?</p>
                <hr />
                <h1 className="font-bold py-9">INTRODUCTION</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error accusantium pariatur aut minus, esse amet tenetur ut sunt aliquam voluptatum? Ipsum animi odio repellat? Iste inventore omnis atque animi cum.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, rem. Est, laborum libero? Ipsum eum vero quas possimus recusandae, optio aliquid porro illo! Maiores error nobis veritatis minima, quasi modi!</p>
                <h1 className="font-bold py-9">DEVELOPEMENT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam aperiam nobis repellat ipsam porro reiciendis omnis aliquam maxime. Tenetur, voluptatum? Sit, molestias nemo. Magni suscipit quaerat quae commodi tenetur.</p>
                <Image src={LuneAfrica} alt="culture congolaise" width={900} height={900} className='m-auto py-7' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error accusantium pariatur aut minus, esse amet tenetur ut sunt aliquam voluptatum? Ipsum animi odio repellat? Iste inventore omnis atque animi cum.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores maxime tempore voluptatibus impedit? Minus temporibus quae nulla odio architecto, adipisci quis tempore maiores inventore ex aliquam debitis blanditiis harum?
                    Eum soluta, assumenda aliquid quis debitis maiores ipsa, voluptas ullam repellendus, earum at dolore culpa! Numquam, facilis adipisci, ratione quisquam animi cupiditate voluptatem veritatis iste aut sapiente minus in optio.
                    Reprehenderit sint fugit rem quo, consequuntur maxime a, molestias ipsam, blanditiis perspiciatis mollitia quasi atque ratione libero aperiam facilis? Fugiat quidem ea voluptas soluta voluptatem! Magnam accusantium non iusto aspernatur!
                    Id est officia ducimus, repudiandae minus sunt veniam autem consectetur tenetur asperiores eaque reprehenderit facilis vitae hic dolore! Neque repudiandae nulla labore, veritatis totam ad fugiat deleniti tempore corrupti illum?
                    Quos, minus? Est culpa ipsum accusamus, molestiae animi praesentium laboriosam omnis, reiciendis iusto esse repudiandae veniam. Ullam obcaecati excepturi debitis asperiores voluptatum veritatis velit officia magni, modi fugit tempore culpa.
                </p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, rem. Est, laborum libero? Ipsum eum vero quas possimus recusandae, optio aliquid porro illo! Maiores error nobis veritatis minima, quasi modi!</p>
                <h1 className="font-bold py-9">CONCLUSION</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error accusantium pariatur aut minus, esse amet tenetur ut sunt aliquam voluptatum? Ipsum animi odio repellat? Iste inventore omnis atque animi cum.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, rem. Est, laborum libero? Ipsum eum vero quas possimus recusandae, optio aliquid porro illo! Maiores error nobis veritatis minima, quasi modi!</p>
           
            </div>
        </div>
    )
}

export default HomePage;