import React, { useState } from 'react';
import Slider from '../Components/Slider/Slider';

const Home = () => {
    const [theme, setTheme] = useState('light'); // Correctly initialize theme and setTheme

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light'); // Correctly define toggle function
    };
    const buttonBgColor = theme === 'light' ? 'bg-red-400' : 'bg-blue-400';

    return (
        <div className='' data-theme={theme}>
            <div className='max-w-[1440px] mx-auto ' data-theme={theme}>
            <button onClick={toggleTheme} className={`p-4 text-white  ${buttonBgColor}`}>Themes</button>
            <Slider></Slider>
           <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, enim deserunt optio molestiae mollitia earum accusantium aliquid eum reiciendis quia dicta modi veniam consectetur maxime pariatur delectus esse natus voluptatum similique ea laborum officiis aspernatur quo eaque! Voluptate ex libero, ratione quis inventore, unde quae, praesentium non ad excepturi fugiat labore porro architecto perferendis animi iusto pariatur laudantium quibusdam exercitationem? Error provident non tenetur eaque iusto incidunt dolorum dignissimos eos molestiae neque ab accusamus quod itaque illum repudiandae ex ipsam ullam, suscipit ut vitae! Necessitatibus alias animi eius dolor suscipit quis, enim repudiandae numquam officiis possimus est dicta eligendi corrupti quod iusto ipsum laborum ex soluta velit doloremque. A ratione possimus fugit assumenda id sed distinctio deleniti ea accusantium tempore necessitatibus quod ex ut maxime tenetur, ipsum asperiores exercitationem numquam eos odio eveniet. Nulla nisi nesciunt, asperiores sed illo, qui magni sunt repellendus consequuntur quam velit laudantium aspernatur ullam numquam labore reprehenderit veritatis ex soluta. Dicta dolor voluptatum neque rem perspiciatis ipsum deserunt nam beatae in id nisi quidem velit ratione, cumque harum magnam unde eum est quam. Quaerat fugit sunt cum rem ut, a recusandae eaque eum explicabo, quia quos officia? Itaque hic nesciunt eum neque, quas mollitia laudantium omnis nam necessitatibus, ab qui quam dignissimos. Quibusdam sequi ea iste autem qui nulla excepturi nostrum possimus! Aperiam magnam fugiat assumenda quidem obcaecati dignissimos, exercitationem earum debitis commodi unde corporis atque, enim harum est ipsam libero ipsum maxime quas beatae. Perferendis placeat ab eum, libero culpa expedita optio excepturi modi quae dignissimos, autem ipsam exercitationem enim tempore ipsum quisquam ex harum fuga? Quas recusandae temporibus molestiae dolorum eos rem, eius aspernatur optio voluptates? Repellendus tempore deleniti, autem quam unde porro omnis nisi laborum, illo optio iure officia cum itaque ipsam? Enim culpa maxime fugit deserunt repellat omnis sequi iste eius doloremque voluptas praesentium cupiditate, consectetur facere voluptate suscipit ut quasi, sit eveniet dolor quisquam. Iste eaque, veniam tempora dolor eveniet, odio, corrupti aliquam explicabo rem cupiditate dicta esse dolores! Culpa quam corrupti necessitatibus explicabo! Dignissimos illo nemo eligendi labore? Ipsum voluptatum modi impedit? Nesciunt ex voluptate asperiores provident, error ratione dolor maiores dolore, dignissimos atque, blanditiis aliquam magnam esse rem officia omnis enim. Ad, fuga! Alias itaque voluptatibus velit saepe vitae dolores, dignissimos veniam similique, illum temporibus dicta molestiae? Est aliquid, dicta suscipit hic, at id explicabo qui, sapiente impedit eos reprehenderit dolore. Nam provident necessitatibus dolorum, at nulla et accusantium ex beatae? Dolores itaque provident nulla esse aut officiis facere commodi accusamus laudantium quae aliquid vitae tempore quibusdam dolorem quidem harum quaerat deleniti, porro mollitia quo necessitatibus sapiente dolorum saepe fuga? Possimus hic, asperiores aliquid repellendus dolore praesentium quis, corrupti, natus assumenda iusto vero nisi deserunt illo sed non aspernatur? Laboriosam autem quod iste vel corporis asperiores quae beatae voluptas perferendis molestias unde officia porro, aliquid rerum debitis veritatis rem, est error totam consequatur pariatur sequi! Numquam, incidunt. Quaerat tenetur necessitatibus error itaque? Adipisci, id eos! Odio obcaecati corporis officia possimus expedita id totam quos architecto ratione optio quod dignissimos hic, dolor, cupiditate vitae eveniet ducimus accusamus. Unde placeat perspiciatis ab possimus quidem recusandae autem ullam temporibus nisi maxime vel itaque nemo, ut et tenetur quo excepturi magni mollitia. Blanditiis commodi provident laboriosam voluptates veniam. Quas perspiciatis doloribus fugiat optio dignissimos, suscipit harum animi! Maiores aliquid, facilis soluta debitis error est tenetur ab atque temporibus libero fuga iste! Aperiam dolores suscipit placeat praesentium, quis exercitationem. Accusantium saepe fugiat sint corrupti eligendi reprehenderit, sequi delectus officiis. Temporibus reiciendis quis rerum, nulla aliquam sunt perspiciatis eaque, laborum, aliquid distinctio sit quaerat ea. Pariatur culpa qui doloremque sequi doloribus voluptatem minima sunt possimus nihil vero quisquam voluptatibus, earum, rem ipsum animi quo fugiat. Recusandae, nemo. Cum, cupiditate voluptatem. Quos molestias sit cum eligendi magni eaque eius hic facilis? Fugit saepe nisi error dolores commodi iusto, blanditiis facere voluptate harum sit ipsam facilis corporis velit eligendi quibusdam ducimus at eveniet quos numquam tenetur officiis. Harum ex, deleniti mollitia soluta nostrum aliquam sapiente deserunt itaque? Mollitia nam sint molestias adipisci ad voluptatum at quod porro doloremque fugiat, quisquam, earum maiores expedita. Error.</h2>
        </div>
        </div>
    );
};

export default Home;