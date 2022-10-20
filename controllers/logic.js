import Players from "../models/Player.js";

export const getPlayers = async (req, res) => {
  try {
    const players = await Players.find();
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Players.findById(id);

    if (player) {
      return res.json(player);
    }
    res.status(404).json({ message: "Player not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPlayer = async (req, res) => {
  try {
    const player = new Players(req.body);
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const player = await Players.findByIdAndUpdate(id, req.body)
    res.status(201).json(player)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Players.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("Player deleted!")
    }

    throw new Error("Player not found")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}