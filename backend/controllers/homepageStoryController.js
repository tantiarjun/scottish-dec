const HomepageStoryContent = require('../models/homepageStoryContent');

exports.getHomepageStory = async(req, res) => {
    try{
      const storyContent = await HomepageStoryContent.findOne();
      if(!storyContent){
        res.status(404).json({error: 'Content not found'});
      }  
      res.status(200).json(storyContent);
    }catch(error){
        res.status(400).json({ error: 'Error fetching content', details: error.message});
    } 
};

exports.updateHomepageStory = async (req, res) => {
    try{
        const {
            title, 
            sub_text,
            description
        } = req.body;
        
        const updateData = {
            title: title ? title.toUpperCase() : undefined,
            sub_text,
            description,
            updated_at: Date.now()
        };


        if(req.files){
            if(req.files.image1){
                updateData.image1_url = req.files.image1[0].location;
            }
            if(req.files.image2){
                updateData.image2_url = req.files.image2[0].location;
            }
        }

        let storyContent = await HomepageStoryContent.findOne();
        if(storyContent){
            storyContent = await HomepageStoryContent.findByIdAndUpdate(storyContent._id, updateData, {new: true})
        }else{
            storyContent = new HomepageStoryContent(updateData);
            await storyContent.save();
        }
        res.status(200).json(storyContent);
    }catch(error){
        res.status(500).json({ error: 'Error updating Content', details: error.message});
    }
};