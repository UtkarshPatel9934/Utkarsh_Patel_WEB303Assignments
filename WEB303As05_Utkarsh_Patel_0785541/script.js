/*
    Assignment 05
    Student Number: 0785541
    Student Name: Utkarsh Patel
*/

$(document).ready(function () {
    // your code here

    class ContentItem{
        constructor(id, name, desc, cat_genre)
        {
            this.id = id;
            this.name = name;
            this.desc = desc;
            this.cat_genre = cat_genre;

        }
       
       



         updateContentItem(id, name, desc, cat_genre)
         {
            if(this.id === id && ((name && desc && cat_genre) !== ""))
            {
                this.id = id;
                this.name = name;
                this.desc = desc;
                this.cat_genre = cat_genre;
            }

         }

         get new_id()
         {
             return this.id;
         }

         get new_name()
        {
            return this.name;
        }

        get new_desc()
        {
            return this.desc;
        }

        get new_cat_genre()
        {
            return this.cat_genre;
        }
    }
    
    let ObjectOfClass = new ContentItem(1, "Cadence", "cadence, in music, the ending of a phrase, perceived as a rhythmic or melodic articulation or a harmonic change or all of these; in a larger sense, a cadence may be a demarcation of a half-phrase, of a section of music, or of an entire movement.", "Cadence rampa");
    console.log(ObjectOfClass);
    /* Update the values stored in it using id */
    ObjectOfClass.updateContentItem(3, "zeel", "Hello I am zeel", "Person");
    /* Update the values stored in it using id */




    /* Displaying the values in console */
    console.log(ObjectOfClass.new_id);
    console.log(ObjectOfClass.new_name);
    console.log(ObjectOfClass.new_desc);
    console.log(ObjectOfClass.new_cat_genre);
    /* Displaying the values in console */
    

    let saveID = ObjectOfClass.new_id;
    let saveName = ObjectOfClass.new_name;
    let saveDesc = ObjectOfClass.new_desc;
    let saveCatGenre = ObjectOfClass.new_cat_genre;

    var h2 = document.createElement('h2');
    h2.innerHTML = saveName.toString();
    var p = document.createElement('P');
    p.innerHTML = saveDesc.toString();
    var div = document.createElement('div');  
    div.innerHTML =  saveCatGenre.toString();
    

    
    var divContentWrapper = document.createElement('div');  
    divContentWrapper.classList = "content-item-wrapper";
    divContentWrapper.id = "content-item-" + saveID;
    

    divContentWrapper.appendChild(h2);
    divContentWrapper.appendChild(p);
    divContentWrapper.appendChild(div);

    $('#content-item-list').append(divContentWrapper);





        /* populating the Data */

        let populateData = [];

        populateData[0] = new ContentItem(1, "Doraemon",`#MS-903 "Doraemon" or simply Doraemon is the main, titular character of all Doraemon media (including, but not limited to the original manga, the anime (1973, 1979, and 2005), video games, and movies).` , "All the Way From the Country of the Future");
    
        populateData[1] = new ContentItem(2, "Nobi Nobita",`Nobita Nobi (野比 のび太 Nobi Nobita), known simply as Noby in the English dub, is the protagonist of the Doraemon series. His birthday is on 7th August (Leo).` ,"All the Way From the Country of the Future");
    
        populateData[2] = new ContentItem(3, "Shizuka Minamoto",`Shizuka Minamoto (源 静香 Minamoto Shizuka), or Sue in the English dub, (born 8th May) is one of the main characters in the series, being the main female character. In the future after marrying Nobita, she is also known as Shizuka Nobi or Mrs. Nobi.` ,"All the Way From the Country of the Future");
    
        populateData[3] = new ContentItem(4, "Takeshi Gouda", `Takeshi Gouda (Japanese Kanji: 剛田 武, born June 15th), more commonly known by his nickname Gian (Japanese: ジャイアン, translation of the English term Giant), is one of the main characters in the Doraemon series. In the English dub, he is known as Big G.`,"All the Way From the Country of the Future");
    
        populateData[4] = new ContentItem(5, "Suneo Honekawa", `Suneo Honekawa (骨川スネ夫 Honekawa Suneo) (also known as Sneech in the English episodes) is a spoiled rich kid who likes to show off his cool stuff to his friends to make them jealous.`,"Operation: Secret SPY");
    
        // console.log(populateData);
    
        /* populating the Data */




        // /* Displaying the values in console */
        // console.log(populateData[0]);
        // console.log(populateData[1]);
        // console.log(populateData[2]);
        // console.log(populateData[3]);
        // console.log(populateData[4]);
        // /* Displaying the values in console */
        
        for(let i=0; i<populateData.length; i++)
        {
            var h2_ = document.createElement('h4');
            h2_.classList = "h2_";
            var p_ = document.createElement('P');
            p_.classList = "p_";
            var div_ = document.createElement('div');  
            div_.classList = "div_";
            
            var divContentWrapper_ = document.createElement('div');  
            
            h2_.innerHTML = (populateData[i].name).toString();
            p_.innerHTML = (populateData[i].desc).toString();
            div_.innerHTML = (populateData[i].cat_genre).toString();
            
            divContentWrapper_.classList = "content-item-wrapper";
            divContentWrapper_.id = "content-item-" + saveID;
            
            divContentWrapper_.appendChild(h2_);
            divContentWrapper_.appendChild(p_);
            divContentWrapper_.appendChild(div_);
            $('#content-item-list').append(divContentWrapper_);
        }
        
        $('.h2_').css({
            "width": "auto",
            "margin": "20px auto",
            "border": "2px solid grey",
            "padding": "15px",
            "text-align": "center",
            "background-color": "grey",
            "font-size": "25px"
        })
        $('.p_').css({
            "width": "auto",
            "margin": "20px auto",
            "border": "2px solid grey",
            "padding": "15px",
            "text-align": "center",
            "background-color": "grey",
            "color": "whitesmoke"
        })
        $('.div_').css({
            "width": "auto",
            "margin": "20px auto",
            "text-align": "center",
            "border": "2px solid grey",
            "padding": "15px",
            "text-align": "center",
            "background-color": "grey",
            "color": "whitesmoke"
        })
        $('.content-item-wrapper').css({
            "border": "2px solid red",
            "padding": "5px",
            "margin": "10px auto",
        })


        $('section > h2').text('Doraemon');
    });


