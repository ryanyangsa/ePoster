const RY_ePoster = function() {
    const DEFAULT_EPOSTER = 0;

	const ePosters = [
		{ url: "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=", from: "", to: "" }
       ,{ url: "https://www.realsimple.com/thmb/AmmVVHtNTPabPVQW0PXLri1LvQc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-hazrat-inayat-khan-d5cc3d9a76f74b62a5345649e081f5bc.jpg", from: "20221212", to: "20221225" }
       ,{ url: "https://www.realsimple.com/thmb/3IYmooPAfJRa6vnNRvEfEmk2PXc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-joseph-campbell-099d0c89f02041d9ad7d36b0d93f90c3.jpg", from: "20221226", to: "20230108" }
       ,{ url: "https://www.realsimple.com/thmb/-JALaisGCpg9uuwH10SXgxesdn4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-jim-rohn-ed70f9d246e84418bcf54dc25c8fcb46.jpg", from: "20230109", to: "20230122" }
       ,{ url: "https://img.freepik.com/free-photo/happy-new-year-2023-sparkling-burning-text-happy-new-year-2023-isolated-on-black-background-beauti_1205-12047.jpg?w=1480&t=st=1674888507~exp=1674889107~hmac=69df2c1b540a604527e6b53d4ebd83a01264121ab67db007c7ba5468fa1d413b", from: "20230123", to: "20230205" }
       ,{ url: "https://www.realsimple.com/thmb/5YG_Cy5a9JSm_rhDFMzCKlzSyx4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-martin-luther-king-jr-6fe0610f3f344d03ae1171ec3f96adac.jpg", from: "20230206", to: "20230219" }
       ,{ url: "https://www.realsimple.com/thmb/is-6ATrZ6JdCTyweejN0i-8bMgQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-maya-angelou-14fbfe2efcf248aea021e67dd2a3fbcf.jpg", from: "20230220", to: "20230305" }
       ,{ url: "https://www.realsimple.com/thmb/i8HfX7BC7Rulk2hiTW2zlqIyP8w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-zora-neale-hurston-eyes-watching-god-96f51cb54baa4698a634ba1b3b13c7ab.jpg", from: "20230306", to: "20230319" }
       ,{ url: "https://www.realsimple.com/thmb/utpjjzWjzHTUJ6vYScfTWDAV1Mg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-kate-morton-forgotten-garden-30a6a2cb2b714d15977dd9fcf6dcb72c.jpg", from: "20230320", to: "20230402" }
       ,{ url: "https://www.realsimple.com/thmb/uW2JcOCYViDhcETg6bnV9aU6PYs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-meghan-markle-498de1b0635c4bd19c8ba6d3b7494827.jpg", from: "20230403", to: "20230416" }
       ,{ url: "https://www.realsimple.com/thmb/c53T2uuLRBEviomhMlgJuyRZxEc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-michael-altshuler-84a4982aa0854429815d0c35d8cff775.jpg", from: "20230417", to: "20230430" }
       ,{ url: "https://www.realsimple.com/thmb/yx01zCzEr4BMqUXq9oIojSiZAvo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-theodore-roosevelt-8affcd5dee5b4a13a4942d98a2b4e79f.jpg", from: "20230501", to: "20230514" }
       ,{ url: "https://www.realsimple.com/thmb/0VFHUIJ2En7fqs6W_h83vty-Ouk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-albert-einstein-c03a299da250403d9127db8546a88362.jpg", from: "20230515", to: "20230528" }
       ,{ url: "https://www.realsimple.com/thmb/pw4JTHnYACH1tZQDgP8HPhtKmj0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-cs-lewis-b6a54663ccf34bcf85c185c57c9629ae.jpg", from: "20230529", to: "20230611" }
       ,{ url: "https://www.realsimple.com/thmb/g812urQZ71VwOwgVuTwo4AUqSUo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/positive-quotes-captions-life-motivational-inspirational-george-eliot-f8cba2bd1442420dbe888589d86ef9da.jpg", from: "20230612", to: "20230625" }
	];

    getDate = function() {
    	d = new Date();
    
        year = d.getFullYear();
        month = ("0" + (d.getMonth() + 1)).slice(-2);
        date = ("0" + d.getDate()).slice(-2);
        
        return year + month + date;
    };

    getTodayPoster = function(today) {
        return ePosters.filter(it => it.from <= today && it.to >= today).shift() || ePosters[DEFAULT_EPOSTER];
    };

    return {
        init: getDate,
        getTodayPoster: getTodayPoster,
    }
}();
